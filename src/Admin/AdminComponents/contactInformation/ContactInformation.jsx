/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import ContactInformationService from "../../../services/contactInformationService";
import { ContactInformationAdd } from "./ContactInformationAddForm";
function ContactInformation() {
  const [contactInformations, setContactInformations] = useState([]);
  const [contactId, setContactId] = useState([]);
  const [id, setId] = useState();
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const contactInformationService = new ContactInformationService();
  useEffect(() => {
    contactInformationService
      .getInformation()
      .then((result) => setContactInformations(result.data.data));
  }, []);

  useEffect(() => {
    contactInformationService
      .getInformationById(id)
      .then((result) => setContactId(result.data.data));
  }, [id]);
  const ContactInformationUpdate = () => {
    const validationSchema = Yup.object({
      address: Yup.string().required("Zorunlu Alan"),
      email: Yup.string().required("Zorunlu Alan"),
      gsm: Yup.string().required("Zorunlu Alan"),
      phone: Yup.string().required("Zorunlu Alan"),
      supportLine: Yup.string().required("Zorunlu Alan"),
    });

    const initialValues = {
      address: contactId.address,
      email: contactId.email,
      gsm: contactId.gsm,
      phone: contactId.phone,
      supportLine: contactId.supportLine,
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
        <Modal.Header>İletişim Bilgisini Güncelle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                contactInformationService.update(id,values)
                window.location.reload();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label>Adres</label>

                  <BiricikTextAreaInput
                    name="address"
                    placeholder="Adres"
                  ></BiricikTextAreaInput>
                  <label>Email</label>
                  <BiricikTextInput
                    name="email"
                    placeholder="Email"
                  ></BiricikTextInput>
                  <label>GSM</label>

                  <BiricikTextInput
                    name="gsm"
                    placeholder="GSM"
                  ></BiricikTextInput>
                  <label>Telefon</label>

                  <BiricikTextInput
                    name="phone"
                    placeholder="Telefon"
                  ></BiricikTextInput>
                  <label>Destek Hattı</label>

                  <BiricikTextInput
                    name="supportLine"
                    placeholder="Destek Hattı"
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
                  <i className="material-icons"></i>{" "}
                  <span>Yeni İletişim Bilgisi Ekle</span>
                </a>
              </div>
            </div>
          </div>
          <Table unstackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Adres</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>GSM</Table.HeaderCell>

                <Table.HeaderCell>Telefon</Table.HeaderCell>
                <Table.HeaderCell>Destek Hattı</Table.HeaderCell>


                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {contactInformations.map((con) => (
                <Table.Row key={con.id}>
                  <Table.Cell>{con.address}</Table.Cell>
                  <Table.Cell>{con.email}</Table.Cell>
                  <Table.Cell>{con.gsm}</Table.Cell>

                  <Table.Cell>{con.phone}</Table.Cell>

                  <Table.Cell>{con.supportLine}</Table.Cell>


                  <Table.Cell>
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      onClick={() => setId(con.id)}
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
                      onClick={() => setId(con.id)}
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
      <ContactInformationAdd  addOpen={addOpen} setAddOpen={setAddOpen}></ContactInformationAdd>

      {/* Edit Modal HTML */}
      <ContactInformationUpdate></ContactInformationUpdate>
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
                  onClick={()=> contactInformationService.delete(id)}

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

export default ContactInformation;
