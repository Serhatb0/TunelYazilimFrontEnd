/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Dropdown, Form, Modal } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import ProductService from "../../../services/productService";
import { useEffect, useState } from "react";
import SiteFeaturesService from "../../../services/siteFeaturesService";

export const ProductDetailAddForm = ({ addOpen, setAddOpen }) => {
  const [product, setProduct] = useState([]);
  const siteFeaturesService = new SiteFeaturesService();
  const productService = new ProductService();
  const [proId, setproId] = useState();
  const handleChangeProduct = (e, { value }) => {
    setproId({  value });
  };
  useEffect(() => {
    productService.getProduct().then((result) => setProduct(result.data.data));
  }, []);
  const validationSchema = Yup.object({
    technicalSpecifications: Yup.string().required("Zorunlu Alan"),
    silver: Yup.string().required("Zorunlu Alan"),
    gold: Yup.string().required("Zorunlu Alan"),
    diamod: Yup.string().required("Zorunlu Alan"),
    explanation: Yup.string().required("Zorunlu Alan"),
  });
  const initialValues = {
    technicalSpecifications: "",
    silver: "",
    gold: "",
    diamod: "",

    explanation: "",
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
      <Modal.Header>Ürun Detayı Ekle</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
             siteFeaturesService.add(proId.value,values);
              window.location.reload();

            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                
                <Dropdown style={{minWidth:"23em" ,margin:"0em 0em 1em 0em"}}  placeholder='Ürun Adı' fluid clearable   selection 
                onChange={handleChangeProduct}
                options={product.map((pro) => {
                  return {
                    text: pro.productName,
                    key: pro.id,
                    value: pro.id,
                  };
                })}
                />
                {/* <Dropdown
                style={{}}
                  placeholder="State"
                  search
                  selection
                  options={product.map((pro) => {
                    return {
                      text: pro.productName,
                      key: pro.id,
                      value: pro.id,
                    };
                  })}
                /> */}

                <BiricikTextInput
                  name="technicalSpecifications"
                  placeholder="Teknik Özelikler"
                ></BiricikTextInput>

                <BiricikTextInput
                  name="silver"
                  placeholder="Silver"
                ></BiricikTextInput>

                <BiricikTextInput
                  name="gold"
                  placeholder="Gold"
                ></BiricikTextInput>
                <BiricikTextInput
                  name="diamod"
                  placeholder="Ürun Açıklaması"
                ></BiricikTextInput>
                <BiricikTextAreaInput
                  name="explanation"
                  placeholder="Açıklama"
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
