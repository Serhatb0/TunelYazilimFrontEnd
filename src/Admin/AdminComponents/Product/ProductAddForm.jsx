import { Button, Form, Modal,} from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import ProductService from "../../../services/productService";



export const ProductAddForm = ({addOpen,setAddOpen}) => {
  const productService = new ProductService();

    const validationSchema = Yup.object({
      productName: Yup.string().required("Zorunlu Alan"),
      productDescription: Yup.string().required("Zorunlu Alan"),
    });

    const initialValues = {
      productName: "",
      productDescription: "",
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
        <Modal.Header>Ürun Ekle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                  productService.add(values)
                window.location.reload();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label>Ürun Adı</label>

                  <BiricikTextInput
                    name="productName"
                    placeholder="Ürun Adı"
                  ></BiricikTextInput>
                  <label>Ürun Açıklaması</label>
                  <BiricikTextAreaInput
                    name="productDescription"
                    placeholder="Ürun Açıklaması"
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
