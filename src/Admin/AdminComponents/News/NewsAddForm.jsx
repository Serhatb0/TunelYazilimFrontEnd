import { Button, Form, Modal,  } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import NewsService from '../../../services/newsService';
import "./News.css"

export const NewsAddForm = ({addOpen , setAddOpen}) => {

 
    const newsService = new NewsService();
    const validationSchema = Yup.object({
        newsName: Yup.string().required("Zorunlu Alan"),
        newsDescription: Yup.string().required("Zorunlu Alan"),
    });

    const initialValues = {
      newsName: "",
      newsDescription:"",
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
        <Modal.Header>Yeni Haber Ekle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                newsService.add(values)
                window.location.reload();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>

                  <label>Haber Adı</label>

                  <BiricikTextInput
                    name="newsName"
                    placeholder="Haber Başlıgı"
                  ></BiricikTextInput>
                  <label>Haber Açıklaması</label>
                  <BiricikTextAreaInput
                    name="newsDescription"
                    placeholder="Haber Açıklaması"
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