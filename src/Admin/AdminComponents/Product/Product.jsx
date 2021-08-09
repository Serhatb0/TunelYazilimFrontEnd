/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import ProductService from "../../../services/productService";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import { ProductAddForm } from "./ProductAddForm";
function Product() {
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState([]);
  const [id, setId] = useState();
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const productService = new ProductService();
  useEffect(() => {
    productService.getProduct().then((result) => setProduct(result.data.data));
  }, []);

  useEffect(() => {
    productService
      .getProductById(id)
      .then((result) => setProductId(result.data.data));
  }, [id]);
  console.log(id);
  const ProductUpdateForm = () => {
    const validationSchema = Yup.object({
      productName: Yup.string().required("Zorunlu Alan"),
      productDescription: Yup.string().required("Zorunlu Alan"),
    });

    const initialValues = {
      productName: productId.productName,
      productDescription: productId.productDescription,
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
        <Modal.Header>Ürun Güncelle</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                productService.update(id, values);
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
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
                  Ürun <b>Bilgileri</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#addEmployeeModal"
                  className="btn btn-success"
                  data-toggle="modal"
                  onClick={() => setAddOpen(true)}
                >
                  <i className="material-icons"></i>{" "}
                  <span>Yeni Ürun Ekle</span>
                </a>
              </div>
            </div>
          </div>
          <Table unstackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ürun Adı</Table.HeaderCell>
                <Table.HeaderCell>Ürun Açıklamsı</Table.HeaderCell>

                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {product.map((pro) => (
                <Table.Row key={pro.id}>
                  <Table.Cell>{pro.productName}</Table.Cell>
                  <Table.Cell>{pro.productDescription}</Table.Cell>

                  <Table.Cell>
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      onClick={() => setId(pro.id)}
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
                    <a
                      onClick={() => setId(pro.id)}
                      href="#deleteEmployeeModal"
                      className="delete"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        
                      </i>
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          <div className="clearfix">
            <div className="hint-text">
              Showing <b>5</b> out of <b>25</b> entries
            </div>
            <Pagination></Pagination>
          </div>
        </div>
      </div>
      {/* Edit Modal HTML */}
      <ProductAddForm  addOpen={addOpen} setAddOpen={setAddOpen}></ProductAddForm>

      {/* Edit Modal HTML */}

      <ProductUpdateForm></ProductUpdateForm>
      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>Silmek İstediginize Emin Misiniz</p>
                <p className="text-warning"></p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="İptal"
                />
                <Button
                  onClick={()=> productService.delete(id)}
                
                inverted color="green">
                  Sil
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
