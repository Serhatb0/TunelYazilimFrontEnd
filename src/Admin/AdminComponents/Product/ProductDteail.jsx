/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import SiteFeaturesService from "../../../services/siteFeaturesService";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import { ProductDetailAddForm } from "./ProductDteailAddForm";
function ProductDteail() {
  const [siteFeatures, setSiteFeatures] = useState([]);
  const [siteFeaturesId, setSiteFeaturesId] = useState([]);
  const [id, setId] = useState();
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const siteFeaturesService = new SiteFeaturesService();
  useEffect(() => {
    siteFeaturesService
      .getFeatures()
      .then((result) => setSiteFeatures(result.data.data));
  }, []);

  useEffect(() => {
    if(id === undefined){

    }else{
        siteFeaturesService
      .getFeaturesId(id)
      .then((result) => setSiteFeaturesId(result.data.data));
    }
  
  }, [id]);
  const ProductUpdateForm = () => {
    const validationSchema = Yup.object({
      technicalSpecifications: Yup.string().required("Zorunlu Alan"),
      silver: Yup.string().required("Zorunlu Alan"),

      gold: Yup.string().required("Zorunlu Alan"),

      diamod: Yup.string().required("Zorunlu Alan"),
      explanation: Yup.string().required("Zorunlu Alan"),
    });

    const initialValues = {
      technicalSpecifications: siteFeaturesId.technicalSpecifications,
      silver: siteFeaturesId.silver,
      gold: siteFeaturesId.gold,
      diamod: siteFeaturesId.diamod,

      explanation: siteFeaturesId.explanation,
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
        <Modal.Header>Ürun Detayı Güncelle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                siteFeaturesService.update(id,values)
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label>Ürun Adı</label>

                  <Form.Input
                         value={siteFeaturesId.productName}

                    placeholder="Ürun Adı"
                  ></Form.Input>
                  <label>Teknik Özelikler</label>

                      <BiricikTextInput
                    name="technicalSpecifications"
                    placeholder="Teknik Özelikler"
                  ></BiricikTextInput>
                  <label>Silver</label>

                      <BiricikTextInput
                    name="silver"
                    placeholder="Silver"
                  ></BiricikTextInput>
                  <label>Gold</label>

                      <BiricikTextInput
                    name="gold"
                    placeholder="Gold"
                  ></BiricikTextInput>
                  <label>Diamond</label>
                  <BiricikTextInput
                    name="diamod"
                    placeholder="Ürun Açıklaması"
                  ></BiricikTextInput>
                   <label>Açıklama</label>
                  <BiricikTextAreaInput
                    name="explanation"
                    placeholder="Açıklama"
                  ></BiricikTextAreaInput>


                  <Modal.Actions>
                    <Button color="black" onClick={() => setOpen(false)}>
                      İptal
                    </Button>
                    <Button
                      content="Güncelle"
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
                  Ürun <b>Bilgileri</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#addEmployeeModal"
                  className="btn btn-success"
                  data-toggle="modal"
                  onClick={() => setAddOpen(true)}
                >
                  <i className="material-icons"></i>{" "}
                  <span>Ürun Detayı Ekle</span>
                </a>
              </div>
            </div>
          </div>
          <Table stackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ürun Adı</Table.HeaderCell>
                <Table.HeaderCell>Teknik Özelikler</Table.HeaderCell>
                <Table.HeaderCell>Silver</Table.HeaderCell>
                <Table.HeaderCell>Gold</Table.HeaderCell>
                <Table.HeaderCell>Diamod</Table.HeaderCell>
                <Table.HeaderCell>explanation</Table.HeaderCell>

                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {siteFeatures.map((site) => (
                <Table.Row key={site.id}>
                  <Table.Cell>{site.productName}</Table.Cell>
                  <Table.Cell>{site.technicalSpecifications}</Table.Cell>
                  <Table.Cell>{site.silver}</Table.Cell>
                  <Table.Cell>{site.gold}</Table.Cell>
                  <Table.Cell>{site.diamod}</Table.Cell>
                  <Table.Cell>{site.explanation}</Table.Cell>

                  <Table.Cell>
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      onClick={() => setId(site.id)}
                      data-toggle="modal"
                    >
                      <i
                        onClick={() => setOpen(true)}
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        
                      </i>
                    </a>
                    <a
                      onClick={() => setId(site.id)}
                      href="#deleteEmployeeModal"
                      className="delete"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        
                      </i>
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

         
        </div>
      </div>
      {/* Edit Modal HTML */}
      <ProductDetailAddForm  addOpen={addOpen} setAddOpen={setAddOpen}></ProductDetailAddForm>

      {/* Edit Modal HTML */}

      <ProductUpdateForm></ProductUpdateForm>
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
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>Silmek İstediginize Emin Misiniz</p>
                <p className="text-warning"></p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="İptal"
                />
                <Button
                  onClick={()=> siteFeaturesService.delete(id)}

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

export default ProductDteail;
