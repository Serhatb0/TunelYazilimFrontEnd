import { Button, Form, Modal } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import ReferencesService from "../../../services/referencesService";

export const AddReferencesForm = ({ setAddOpen, addOpen }) => {
  const referencesService = new ReferencesService();
  const validationSchema = Yup.object({
    referencesName: Yup.string().required("Zorunlu Alan"),
    referencesDescription: Yup.string().required("Zorunlu Alan"),
    referencesLink: Yup.string().required("Zorunlu Alan"),
  });

  const initialValues = {
    referencesName: "",
    referencesDescription: "",

    referencesLink: "",
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
      <Modal.Header>Referans Ekle</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              referencesService.add(values);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
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
