/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from "../../../utilities/customFormControls/BiricikTextInput";
import ProductService from "../../../services/productService";
import BiricikTextAreaInput from "../../../utilities/customFormControls/BiricikTextAreaInput";
import { ProductAddForm } from "./ProductAddForm";
import ProductAddImage from "./ProductAddImage";
function Product() {
  const [pageSize] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [total, setTotal] = useState()
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState([]);
  const [id, setId] = useState();
  const [addImageOpen, setAddImageOpen] = useState(false)
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const productService = new ProductService();
  useEffect(() => {
    if(activePage ===0){

    }else{
       productService.getProduct(activePage,pageSize).then((result) => setProduct(result.data.data))

    productService.getProduct(activePage,pageSize).then((result) => setTotal(result.data.message))
    }
   

   
  }, [activePage]);
  useEffect(() => {
    if(id === undefined){

    }else{
      productService
      .getProductById(id)
      .then((result) => setProductId(result.data.data));
    }
  
  }, [id]);
  const handleSelectedPage = (e, { activePage }) => {
    setActivePage(activePage);
  };
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
        <Modal.Header>??run G??ncelle</Modal.Header>
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
                  <label>??run Ad??</label>

                  <BiricikTextInput
                    name="productName"
                    placeholder="??run Ad??"
                  ></BiricikTextInput>
                  <label>??run A????klamas??</label>
                  <BiricikTextAreaInput
                    name="productDescription"
                    placeholder="??run A????klamas??"
                  ></BiricikTextAreaInput>

                  <Modal.Actions>
                    <Button color="black" onClick={() => setOpen(false)}>
                      ??ptal
                    </Button>
                    <Button
                      content="G??ncelle"
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
                  ??run <b>Bilgileri</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#addEmployeeModal"
                  className="btn btn-success"
                  data-toggle="modal"
                  onClick={() => setAddOpen(true)}
                >
                  <i className="material-icons">???</i>{" "}
                  <span>Yeni ??run Ekle</span>
                </a>
              </div>
            </div>
          </div>
          <Table stackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>??run Ad??</Table.HeaderCell>
                <Table.HeaderCell>??run A????klams??</Table.HeaderCell>

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
                        ???
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
                        ???
                      </i>
                    </a>
                    <a
                      onClick={() => setId(pro.id)}
                      href="#"

                    >
                      <i
                        onClick={() => setAddImageOpen(true)}
                        className="bi bi-card-image"
                      >
                     
                      </i>
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          <div className="clearfix">
          <Pagination
    boundaryRange={0}
    activePage={activePage}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    onPageChange={handleSelectedPage}
    siblingRange={1}
    totalPages={Math.ceil(
      parseInt(total) / pageSize
    )}
  />
           
          
          </div>
        </div>
      </div>
      {/* Edit Modal HTML */}
      <ProductAddForm  addOpen={addOpen} setAddOpen={setAddOpen}></ProductAddForm>
        <ProductAddImage  setAddImageOpen={setAddImageOpen} addImageOpen={addImageOpen} id={id}></ProductAddImage>
      {/* Edit Modal HTML */}

      <ProductUpdateForm></ProductUpdateForm>
      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ??
                </button>
              </div>
              <div className="modal-body">
                <p>Silmek ??stediginize Emin Misiniz</p>
                <p className="text-warning"></p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="??ptal"
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
