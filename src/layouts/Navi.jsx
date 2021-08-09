/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "./Navi.css";
import { Button, Image} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
function Navi() {
  return (
    <div>
      <div className="bs-example" >
        <nav className="navbar navbar-expand navbar-light bg-dark">
          <div className="container">
            <div
              className="d-flex  flex-column text-light
            justify-content-center"
            >
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <i className="bi bi-whatsapp"></i>{" "}
                <p style={{ margin: "0em 0em 0em 1em" }}>888 555 2568</p>
                <i
                  style={{ margin: "0em 0em 0em 1em" }}
                  className="bi bi-envelope"
                ></i>{" "}
                <p style={{ margin: "0em 0em 0em 1em" }}>
                  {" "}
                  info@tunelyazilim.com{" "}
                </p>
                <p style={{ margin: "0em 0em 0em 1em" }}>
                  {" "}
                  tunelyazilim@gmail.com{" "}
                </p>
              </div>
              </div>
              {/* <div className="  justify-content-end  align-items-end">
              <Button className="response" circular color='facebook' icon='facebook' />
    <Button className="response" circular color='twitter' icon='twitter' />
    <Button className="response" circular color='linkedin' icon='linkedin' />
    <Button className="response" circular color='google plus' icon='google plus' />
              </div> */}
            
          </div>
        </nav>
      </div>
      <Navbar bg="danger" variant="dark" expand="md">
      
        <Image src="https://www.tunelyazilim.com/site_document/files/resim/yenii_02842.jpg" 
        size='medium' 
        verticalAlign='middle' />{' '}
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="ms-auto  py-3">
            <Nav.Link as={NavLink} to="/home">Anasayfa</Nav.Link>
            <Nav.Link as={NavLink} to="/about">Hakkımızda</Nav.Link>
            <Nav.Link  as={NavLink} to="/references">Referanslar</Nav.Link>
            <Nav.Link as={NavLink} to="/products">Ürunlerimiz</Nav.Link>
            <Nav.Link as={NavLink} to="/news">Haberler</Nav.Link>
            <Nav.Link as={NavLink} to="/video">Videolar</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
}

export default Navi;
