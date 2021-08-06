/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Modal, Pagination, Table } from "semantic-ui-react";
import ReferencesService from "../../../services/referencesService";
import { Button, Form } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import { AddReferencesForm } from "./AddReferencesForm";

function References() {
  const [references, setReferences] = useState([]);
  const [id, setId] = useState();
  const [refrencesId, setRefrencesId] = useState([]);
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const referencesService = new ReferencesService();

  useEffect(() => {
    referencesService
      .getReferences()
      .then((result) => setReferences(result.data.data));
  }, []);

  useEffect(() => {
    referencesService
      .getReferencesById(id)
      .then((result) => setRefrencesId(result.data.data));
  }, [id]);


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
        <Modal.Header>Referansları Güncelle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                referencesService.update(id, values);
                window.location.reload();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label>Referans Adı</label>

                  <BiricikTextInput
                    name="referencesName"
                    placeholder="Referans Adı"
                  ></BiricikTextInput>
                  <label>Referans Açıklaması</label>

                  <BiricikTextInput
                    name="referencesDescription"
                    placeholder="Referans Açıklaması"
                  ></BiricikTextInput>
                  <label>Referans Linki</label>

                  <BiricikTextInput
                    name="referencesLink"
                    placeholder="Referans Linki"
                  ></BiricikTextInput>

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
                  <i className="material-icons"></i>{" "}
                  <span>Yeni Referans Ekle</span>
                </a>
              </div>
            </div>
          </div>
          <Table unstackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Referans Adı</Table.HeaderCell>
                <Table.HeaderCell>Referans Açıklamsı</Table.HeaderCell>
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
                        
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
                        
                      </i>
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          <div className="clearfix">
            <div className="hint-text">
              Showing <b>5</b> out of <b>25</b> entries
            </div>
            <Pagination></Pagination>
          </div>
        </div>
      </div>
      {/* Edit Modal HTML */}
      <AddReferencesForm  addOpen={addOpen} setAddOpen={setAddOpen}></AddReferencesForm>
     
      {/* Edit Modal HTML */}

      <ReferencesUpdateForm></ReferencesUpdateForm>
      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
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
                <p className="text-warning">
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="İptal"
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
