import { Formik } from "formik";
import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import BiricikTextInput from "../../utilities/customFormControls/BiricikTextInput";

import ContactFormService from "../../services/contactFormService";

var contactFormService = new ContactFormService();

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Zorunlu Alan"),
  phone: Yup.string().required("Zorunlu Alan"),
  gsm: Yup.string().required("Zorunlu Alan"),
  email: Yup.string().required("Zorunlu Alan"),
  message: Yup.string().required("Zorunlu Alan")

  });

const initialValues = {
    firstName: "",
    phone: "",
    gsm:"",
    email:"",
    message:""
  };
 export const ContactForm = () => {

    return (
     
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
               contactFormService.add(values);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <BiricikTextInput
                    name="firstName"
                    placeholder="Ad Soyad"
                  ></BiricikTextInput>
                  <BiricikTextInput
                    name="phone"
                    placeholder="Telefon"
                  ></BiricikTextInput>
                  <BiricikTextInput
                    name="gsm"
                    placeholder="GSM"
                  ></BiricikTextInput>
                  <BiricikTextInput
                    name="email"
                    placeholder="Email"
                  ></BiricikTextInput>
                    <BiricikTextInput
                    name="message"
                    placeholder="Mesaj"
                  ></BiricikTextInput>
                  
                   
                    <Button
                      content="Gönder"
                      labelPosition="right"
                      icon="checkmark"
                      type="submit"
                      positive
                    />
                </Form>
              )}
            </Formik>
         
    );
  };