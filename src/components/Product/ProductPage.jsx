/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ProductPage.css";
import ProductService from "../../services/productService";
function ProductPage() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const productService = new ProductService();

    productService.getProduct().then((result) => setProduct(result.data.data));
  }, []);
  return (
    <div>
      <section
        style={{ margin: "0em 0em 0em 0em" }}
        className="dark-bg-references"
        id="about"
      >
        <div className="container" style={{ height: "30vh" }}>
          <div
            className="d-flex h-100 flex-column text-light
            justify-content-center"
          >
            <h1 className="text-center">Ürünler</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row" style={{ margin: "2em 0em 0em 0em" }}>
          {product.map((pro)=>(
               <div key={pro.id} className="col-xs-12 col-sm-4">
               <div className="card" style={{ backgroundColor: "#ddd" }}>
                 <a className="img-card">
                   <img src="data:image/jpeg;base64,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" />
                 </a>
                 <div className="card-content">
                   <h4 className="card-title">
                     <a>{pro.productName}</a>
                   </h4>
                   <p className>
                   {pro.productDescription}
                   </p>
                 </div>
                 <div className="card-read-more">
                   <Nav.Link
                     as={NavLink}
                     to={`/products/${pro.id}`}
                     className="btn btn-link btn-block"
                   >
                     Daha Fazla
                   </Nav.Link>
                 </div>
               </div>
             </div>
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
