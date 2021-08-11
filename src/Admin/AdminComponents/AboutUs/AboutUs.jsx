/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal,  Table } from "semantic-ui-react";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import AboutUsService from "../../../services/aboutUsService";
import * as Yup from "yup";
function AboutUs() {
  const [about, setAbout] = useState([]);
  const [id, setId] = useState()
  const [aboutId, setAboutId] = useState([]);
  const [open, setOpen] = useState(false)
  const aboutService = new AboutUsService();
  useEffect(() => {
    aboutService
      .getAbout()
      .then((result) => setAbout(result.data.data));
  }, []);

  useEffect(() => {
    if(id === undefined){

    }else{
          aboutService
      .getAboutById(id)
      .then((result) => setAboutId(result.data.data));
    }

  }, [id]);


  const AboutUpdateForm = () => {
    const validationSchema = Yup.object({
      aboutDescription: Yup.string().required("Zorunlu Alan"),
     
    });

    const initialValues = {
      aboutDescription: aboutId.aboutDescription,
    
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
                aboutService.update(id,values)
                window.location.reload();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <label>Hakkımızda</label>

                  <BiricikTextAreaInput
                    name="aboutDescription"
                    placeholder="Hakkımızda"
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
                  Hakkında <b>Bilgileri</b>
                </h2>
              </div>
            </div>
          </div>
          <Table stackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Hakkımızda</Table.HeaderCell>

                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {about.map((ab) => (
                <Table.Row key={ab.id}>
                  <Table.Cell>{ab.aboutDescription}</Table.Cell>

                  <Table.Cell>
                  <a
                      href="#editEmployeeModal"
                      className="edit"
                      onClick={() => setId(ab.id)}
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
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
      <AboutUpdateForm></AboutUpdateForm>
    </div>
  );
}

export default AboutUs;
