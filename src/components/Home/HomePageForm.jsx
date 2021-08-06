import { Formik } from "formik";
import { toast } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import OnlineOrderServie from "../../services/onlineOrderService";
import BiricikTextInput from "../../utilities/customFormControls/BiricikTextInput";




export const validationSchema = Yup.object({
  firstName: Yup.string().required("Zorunlu Alan"),
  phone: Yup.string().required("Zorunlu Alan"),
  address: Yup.string().required("Zorunlu Alan"),
  note: Yup.string().required("Zorunlu Alan"),
  });

const initialValues = {
    firstName: "",
    phone: "",
    address:"",
    note:"",
  };
 export const HomePageForm = () => {
  const showSuccess = () => {
    toast.success("Success Notification");
  };
   const orderService = new OnlineOrderServie();
    return (
     
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                orderService.add(values)
                toast.success();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <BiricikTextInput
                    name="firstName"
                    placeholder="*Adı Soyadı"
                  ></BiricikTextInput>
                  <BiricikTextInput
                    name="phone"
                    placeholder="*Telefon"
                  ></BiricikTextInput>
                  <BiricikTextInput
                    name="address"
                    placeholder="*address"
                  ></BiricikTextInput>
                  <BiricikTextInput
                    name="note"
                    placeholder="*Not"
                  ></BiricikTextInput>
                   
                    <Button
                    onClick={showSuccess}
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