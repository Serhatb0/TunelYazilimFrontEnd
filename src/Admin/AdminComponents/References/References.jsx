/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Modal, Pagination, Table } from "semantic-ui-react";
import ReferencesService from "../../../services/referencesService";
import { Button, Form } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import { AddReferencesForm } from "./AddReferencesForm";
import AddReferencesImage from "./AddReferencesImage";

function References() {
  const [pageSize] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [total, setTotal] = useState()
  const [references, setReferences] = useState([]);
  const [id, setId] = useState();
  const [refrencesId, setRefrencesId] = useState([]);
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [addImageOpen, setAddImageOpen] = useState(false)

  const referencesService = new ReferencesService();

  useEffect(() => {
    if(activePage === 0){

    }else{
       referencesService
      .getReferences(activePage,pageSize)
      .then((result) => setReferences(result.data.data));

      referencesService
      .getReferences(activePage,pageSize)
      .then((result) => setTotal(result.data.message));
    }
   
  }, [activePage]);
  useEffect(() => {
    if(id === undefined){

    }else{
      referencesService
      .getReferencesById(id)
      .then((result) => setRefrencesId(result.data.data));
    }
  
  }, [id]);
  const handleSelectedPage = (e, { activePage }) => {
    setActivePage(activePage);
  };

  const ReferencesUpdateForm = () => {
    const validationSchema = Yup.object({
      referencesName: Yup.string().required("Zorunlu Alan"),
      referencesDescription: Yup.string().required("Zorunlu Alan"),
      referencesLink: Yup.string().required("Zorunlu Alan"),
    });

    const initialValues = {
      referencesName: refrencesId.referencesName,
      referencesDescription: refrencesId.referencesDescription,

      referencesLink: refrencesId.referencesLink,
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
        <Modal.Header>Referanslar?? G??ncelle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                referencesService.update(id, values);
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label>Referans Ad??</label>

                  <BiricikTextInput
                    name="referencesName"
                    placeholder="Referans Ad??"
                  ></BiricikTextInput>
                  <label>Referans A????klamas??</label>

                  <BiricikTextInput
                    name="referencesDescription"
                    placeholder="Referans A????klamas??"
                  ></BiricikTextInput>
                  <label>Referans Linki</label>

                  <BiricikTextInput
                    name="referencesLink"
                    placeholder="Referans Linki"
                  ></BiricikTextInput>

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
                  Referans <b>Bilgileri</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#addEmployeeModal"
                  className="btn btn-success"
                  data-toggle="modal"
                  onClick={()=>setAddOpen(true)}
                >
                  <i className="material-icons">???</i>{" "}
                  <span>Yeni Referans Ekle</span>
                </a>
              </div>
            </div>
          </div>
          <Table stackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Referans Ad??</Table.HeaderCell>
                <Table.HeaderCell>Referans A????klams??</Table.HeaderCell>
                <Table.HeaderCell>Referans Link</Table.HeaderCell>

                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {references.map((ref) => (
                <Table.Row key={ref.id}>
                  <Table.Cell>{ref.referencesName}</Table.Cell>
                  <Table.Cell>{ref.referencesDescription}</Table.Cell>
                  <Table.Cell>{ref.referencesLink}</Table.Cell>

                  <Table.Cell>
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      onClick={() => setId(ref.id)}
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
                      onClick={() => setId(ref.id)}

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
                    <a
                      onClick={() => setId(ref.id)}
                      href="#"

                    >
                      <i
                        onClick={() => setAddImageOpen(true)}
                        className="bi bi-card-image"
                      >
                     
                      </i>
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
    )}
  />
          </div>
        </div>
      </div>
      {/* Edit Modal HTML */}
      <AddReferencesForm  addOpen={addOpen} setAddOpen={setAddOpen}></AddReferencesForm>
     
      {/* Edit Modal HTML */}

      <ReferencesUpdateForm></ReferencesUpdateForm>
      <AddReferencesImage id={id} setAddImageOpen={setAddImageOpen} addImageOpen={addImageOpen}></AddReferencesImage>
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
                <p className="text-warning">
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="??ptal"
                />
                  <Button
                  onClick={() => referencesService.delete(id)}
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

export default References;
