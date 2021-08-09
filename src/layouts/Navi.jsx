/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "./Navi.css";
import { Button, Icon, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
function Navi() {
  return (
    <div>
      <div className="bg-dark ">
        <div className="container">
          <div className="row">
            <div className="text-light ">
              <i style={{ float: "left" }} className="bi bi-whatsapp"></i>{" "}
              <p style={{ margin: "0em 0em 0em 1.5em", float: "left" }}>
                888 555 2568
              </p>
              <i
                style={{ margin: "0em 0em 0em 1em", float: "left" }}
                className="bi bi-envelope"
              ></i>{" "}
              <p style={{ margin: "0em 0em 0em 1em", float: "left" }}>
                {" "}
                info@tunelyazilim.com{" "}
              </p>
            </div>
            <div
              className="
             response
            "
              style={{margin:"0% 0% 0% 50%"}}
            >
              <Button color="facebook">
                <Icon name="facebook" /> Facebook
              </Button>
              <Button color="twitter">
                <Icon name="twitter" /> Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Navbar bg="danger" variant="dark" expand="md">
        <Image
          src="https://www.tunelyazilim.com/site_document/files/resim/yenii_02842.jpg"
          size="medium"
          verticalAlign="middle"
        />{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="ms-auto  py-3">
            <Nav.Link as={NavLink} to="/home">
              Anasayfa
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              Hakkımızda
            </Nav.Link>
            <Nav.Link as={NavLink} to="/references">
              Referanslar
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Ürunlerimiz
            </Nav.Link>
            <Nav.Link as={NavLink} to="/news">
              Haberler
            </Nav.Link>
            <Nav.Link as={NavLink} to="/video">
              Videolar
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              İletişim
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
