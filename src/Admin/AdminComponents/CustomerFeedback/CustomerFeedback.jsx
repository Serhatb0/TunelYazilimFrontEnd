import React, { useEffect, useState } from "react";
import { Button, Form, Modal,  Table } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import CustomerfeedbackService from "../../../services/customerfeedbackService";
import { CustomerFeedbackAddForm } from "./CustomerFeedbackAddForm";
function CustomerFeedback() {
    const [customerFeedback, setCustomerFeedback] = useState([]);
  const [customerFeedbackId, setCustomerFeedbackId] = useState([]);
  const [id, setId] = useState();
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  useEffect(() => {
    CustomerfeedbackService
      .getCustomerFeedback()
      .then((result) => setCustomerFeedback(result.data.data));
  }, []);

  useEffect(() => {
      if(id === undefined){

      }else{
           CustomerfeedbackService
      .getCustomerFeedbackById(id)
      .then((result) => setCustomerFeedbackId(result.data.data));
      }
   
  }, [id]);
  const CustomerFeedbackUpdateForm = () => {
    const validationSchema = Yup.object({
        cutomerName: Yup.string().required("Zorunlu Alan"),
        customerComment: Yup.string().required("Zorunlu Alan"),
  
    });

    const initialValues = {
        cutomerName: customerFeedbackId.cutomerName,
        customerComment: customerFeedbackId.customerComment,
    
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
        <Modal.Header>Müsteri Yorumları Güncelle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                CustomerfeedbackService.update(id,values)
                window.location.reload();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label>Müşteri Adı</label>


                  <BiricikTextInput
                    name="cutomerName"
                    placeholder="Müşteri Adı"
                  ></BiricikTextInput>
                  <label>Müşteri Yorumu</label>

                  <BiricikTextAreaInput
                    name="customerComment"
                    placeholder="Müşteri Yorumu"
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
                  Müşteri <b>Yorumları</b>
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
                  <span>Müşteri Yorumu Ekle</span>
                </a>
              </div>
            </div>
          </div>
          <Table stackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Müşteri Adı</Table.HeaderCell>
                <Table.HeaderCell>Müşteri Yorumu</Table.HeaderCell>



                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {customerFeedback.map((customer) => (
                <Table.Row key={customer.id}>
                  <Table.Cell>{customer.cutomerName}</Table.Cell>
                  <Table.Cell>{customer.customerComment}</Table.Cell>




                  <Table.Cell>
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      onClick={() => setId(customer.id)}
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
                      onClick={() => setId(customer.id)}
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
      <CustomerFeedbackAddForm  addOpen={addOpen} setAddOpen={setAddOpen}></CustomerFeedbackAddForm>

      {/* Edit Modal HTML */}
      <CustomerFeedbackUpdateForm></CustomerFeedbackUpdateForm>
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
                  onClick={()=> CustomerfeedbackService.delete(id)}

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

export default CustomerFeedback
