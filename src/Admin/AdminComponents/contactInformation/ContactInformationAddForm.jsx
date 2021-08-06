import { Button, Form, Modal, Pagination, Table } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import ContactInformationService from "../../../services/contactInformationService";

 export const ContactInformationAdd = ({addOpen,setAddOpen}) => {
     const contactInformationService = new ContactInformationService();
    const validationSchema = Yup.object({
      address: Yup.string().required("Zorunlu Alan"),
      email: Yup.string().required("Zorunlu Alan"),
      gsm: Yup.string().required("Zorunlu Alan"),
      phone: Yup.string().required("Zorunlu Alan"),
      supportLine: Yup.string().required("Zorunlu Alan"),
    });

    const initialValues = {
      address: "",
      email: "",
      gsm: "",
      phone: "",
      supportLine: "",
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
        <Modal.Header>İletişim Bilgisini Kaydet</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                contactInformationService.add(values)
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