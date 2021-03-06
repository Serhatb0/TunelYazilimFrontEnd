/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import NewsService from "../../../services/newsService";
import { NewsAddForm } from "./NewsAddForm";
import NewsAddImage from "./NewsAddImage";
function News() {
  const [pageSize] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [total, setTotal] = useState();
  const [news, setNews] = useState([]);
  const [newsId, setNewsId] = useState([]);
  const [addImageOpen, setAddImageOpen] = useState(false);

  const [id, setId] = useState();
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const newsService = new NewsService();
  useEffect(() => {
    if(activePage === 0){

    }else{
        newsService
      .getNews(activePage, pageSize)
      .then((result) => setNews(result.data.data));

    newsService
      .getNews(activePage, pageSize)
      .then((result) => setTotal(result.data.message));
    }
  
  }, [activePage]);


  useEffect(() => {
    if(id === undefined){

    }else{
         newsService.getNewsId(id).then((result) => setNewsId(result.data.data));
    }
 
  }, [id]);

  const handleSelectedPage = (e, { activePage }) => {
    setActivePage(activePage);
  };
  const NewsUpdateForm = () => {
    const validationSchema = Yup.object({
      newsName: Yup.string().required("Zorunlu Alan"),
      newsDescription: Yup.string().required("Zorunlu Alan"),
    });

    const initialValues = {
      newsName: newsId.newsName,
      newsDescription: newsId.newsDescription,
    };
    return (
      <Modal
        dimmer={"blurring"}
        centered={true}
        size={"mini"}
        style={{
          height: "auto",
          top: "auto",
          left: "auto",
          bottom: "auto",
          right: "auto",
        }}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Haber G??ncelle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                newsService.update(id, values);
                window.location.reload();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label>Haber Ad??</label>

                  <BiricikTextInput
                    name="newsName"
                    placeholder="Haber Ba??l??g??"
                  ></BiricikTextInput>
                  <label>Haber A????klamas??</label>
                  <BiricikTextAreaInput
                    name="newsDescription"
                    placeholder="Haber A????klamas??"
                  ></BiricikTextAreaInput>

                  <Modal.Actions>
                    <Button color="black" onClick={() => setOpen(false)}>
                      ??ptal
                    </Button>
                    <Button
                      content="G??ncelle"
                      labelPosition="right"
                      icon="checkmark"
                      type="submit"
                      positive
                    />
                  </Modal.Actions>
                </Form>
              )}
            </Formik>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Haber <b>Bilgileri</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#addEmployeeModal"
                  className="btn btn-success"
                  data-toggle="modal"
                  onClick={() => setAddOpen(true)}
                >
                  <i className="material-icons">???</i>{" "}
                  <span>Yeni Haber Ekle</span>
                </a>
              </div>
            </div>
          </div>
          <Table stackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Haber Ad??</Table.HeaderCell>
                <Table.HeaderCell>Haber A????klams??</Table.HeaderCell>

                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {news.map((news) => (
                <Table.Row key={news.id}>
                  <Table.Cell>{news.newsName}</Table.Cell>
                  <Table.Cell>{news.newsDescription}</Table.Cell>

                  <Table.Cell>
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      onClick={() => setId(news.id)}
                      data-toggle="modal"
                    >
                      <i
                        onClick={() => setOpen(true)}
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        ???
                      </i>
                    </a>
                    <a
                      onClick={() => setId(news.id)}
                      href="#deleteEmployeeModal"
                      className="delete"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        ???
                      </i>
                    </a>
                    <a onClick={() => setId(news.id)} href="#">
                      <i
                        onClick={() => setAddImageOpen(true)}
                        className="bi bi-card-image"
                      ></i>
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          <div className="clearfix">
          <Pagination
    boundaryRange={0}
    activePage={activePage}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    onPageChange={handleSelectedPage}
    siblingRange={1}
    totalPages={Math.ceil(
      parseInt(total) / pageSize
    )}/>
          </div>
        </div>
      </div>
      {/* Edit Modal HTML */}
      <NewsAddImage
        setAddImageOpen={setAddImageOpen}
        addImageOpen={addImageOpen}
        id={id}
      ></NewsAddImage>
      <NewsAddForm addOpen={addOpen} setAddOpen={setAddOpen}></NewsAddForm>

      {/* Edit Modal HTML */}
      <NewsUpdateForm></NewsUpdateForm>
      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ??
                </button>
              </div>
              <div className="modal-body">
                <p>Silmek ??stediginize Emin Misiniz</p>
                <p className="text-warning"></p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="??ptal"
                />
                <Button
                  onClick={() => newsService.delete(id)}
                  inverted
                  color="green"
                >
                  Sil
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
