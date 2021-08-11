import { Button, Form, Modal, } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import CustomerfeedbackService from "../../../services/customerfeedbackService";



 
 export const CustomerFeedbackAddForm = ({addOpen,setAddOpen}) => {
    const validationSchema = Yup.object({
        cutomerName: Yup.string().required("Zorunlu Alan"),
        customerComment: Yup.string().required("Zorunlu Alan"),
  
    });

    const initialValues = {
        cutomerName: "",
        customerComment: "",
    
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
        onClose={() => setAddOpen(false)}
        onOpen={() => setAddOpen(true)}
        open={addOpen}
      >
        <Modal.Header>Müsteri Yorumu Ekle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                CustomerfeedbackService.add(values)
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
                    <Button color="black" onClick={() => setAddOpen(false)}>
                      İptal
                    </Button>
                    <Button
                      content="Kaydet"
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