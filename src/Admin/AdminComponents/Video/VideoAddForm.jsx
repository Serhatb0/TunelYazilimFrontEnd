import { Button, Form, Modal } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import VideoService from "../../../services/videoService";





export const VideoAddForm = ({addOpen, setAddOpen}) => {
const videoService = new VideoService();

  const validationSchema = Yup.object({
    videoName: Yup.string().required("Zorunlu Alan"),
    videoUrl: Yup.string().required("Zorunlu Alan"),
  });

  const initialValues = {
    videoName: "",
    videoUrl: "",

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
      <Modal.Header>Video Ekle</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                videoService.add(values)
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <label>Video Adı</label>

                <BiricikTextInput
                  name="videoName"
                  placeholder="Video Adı"
                ></BiricikTextInput>
                <label>Video Url</label>

                <BiricikTextInput
                  name="videoUrl"
                  placeholder="Video Url"
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