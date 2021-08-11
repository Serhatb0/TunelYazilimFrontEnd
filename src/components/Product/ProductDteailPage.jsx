/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image, Table } from "semantic-ui-react";
import ProductService from "../../services/productService";
import SiteFeaturesService from "../../services/siteFeaturesService";
import UploadFilesService from "../../services/uploadFilesService";

import "./ProductPage.css";
function ProductDteailPage() {
  let { id } = useParams();

  const [productFeature, setProductFeature] = useState([]);
  const [productId, setProductId] = useState([]);
  const [photo, setphoto] = useState([])

  useEffect(() => {
    const siteFeaturesService = new SiteFeaturesService();
    const productService = new ProductService();

    if(id === undefined){

    }else{
       productService.getProductById(id)
    .then(result => setProductId(result.data.data))

    siteFeaturesService
      .getFeaturesByProdutId(id)
      .then((result) => setProductFeature(result.data.data));


      UploadFilesService.getFilesProductId(id).then((result => setphoto(result.data.data)))
    }
   
  }, [id]);
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
            <h1 className="text-center">{productId.productName}</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row" style={{ margin: "2em 0em 1em 0em" }}>
          <div className="col-sm-4  ">
            <Card.Group>
              <Card>
                <Card.Content>
                {photo.map((pho)=>(
                   <Image
                    floated="right"
                    size="large"
                    src={pho.photoUrl}
                  />
               
                ))}
                    
                 
                  <Card.Header>{productId.productName}</Card.Header>
                  <Card.Description>
                    Hemen İndirimli Fiyat İçin Sipariş Et
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Sipariş Et
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
          <div className="col-sm-8 ">
            <Table stackable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Teknik Özellikleri</Table.HeaderCell>
                  <Table.HeaderCell>SİLVER</Table.HeaderCell>
                  <Table.HeaderCell>GOLD</Table.HeaderCell>

                  <Table.HeaderCell>DIAMOND</Table.HeaderCell>

                  <Table.HeaderCell>AÇIKLAMA</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {productFeature.map((feature) => (
                  <Table.Row>
                    <Table.Cell>{feature.technicalSpecifications}</Table.Cell>
                    <Table.Cell>{feature.silver}</Table.Cell>
                    <Table.Cell>{feature.gold}</Table.Cell>

                    <Table.Cell>{feature.diamod}</Table.Cell>
                    <Table.Cell>
                     {feature.explanation}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDteailPage;
