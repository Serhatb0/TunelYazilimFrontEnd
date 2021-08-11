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

    productService.getProductAll().then((result) => setProduct(result.data.data));
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
          {product.map((product)=>(
               <div key={product.id} className="col-xs-12 col-sm-4">
               <div className="card" style={{ backgroundColor: "#ddd" }}>
               {product?.photos.map((pho)=>(
                  <a className="img-card">
                   <img src={pho.photoUrl} />
                 </a>
               ))}
                
                 <div className="card-content">
                   <h4 className="card-title">
                     <a>{product.productName}</a>
                   </h4>
                   <p className>
                   {product.productDescription}
                   </p>
                 </div>
                 <div className="card-read-more">
                   <Nav.Link
                     as={NavLink}
                     to={`/products/${product.id}`}
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
