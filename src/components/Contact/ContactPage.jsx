/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import {  Table } from "semantic-ui-react";
import { ContactForm } from "./ContactForm";
import ContactInformationfrom from "../../services/contactInformationService";
import "./Contact.css";
function ContactPage() {

  const [ınformation, setInformation] = useState([]);
  useEffect(() => {
    const contactInformationfrom = new ContactInformationfrom();

    contactInformationfrom.getInformation().then((result) => setInformation(result.data.data));
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
            <h1 className="text-center">İletişim</h1>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row" style={{ margin: "2em 0em 0em 2em " }}>
          <div className="col">
            <ContactForm></ContactForm>
          </div>
          <div className="col">
            {ınformation.map((info)=>(
               <div key={info.id}>
               <i class="bi bi-geo-alt-fill" style={{ float: "left" }}></i>
               <h3>Address:</h3>
               <p>
                {info.address}
               </p>
   
               <Table unstackable definition>
                 <Table.Body>
                   <Table.Row>
                     <Table.Cell>7 / 24 Destek hattı</Table.Cell>
                     <Table.Cell>0 850 885 4 456</Table.Cell>
                   </Table.Row>
                   <Table.Row>
                     <Table.Cell>Telefon</Table.Cell>
                     <Table.Cell>{info.phone}</Table.Cell>
                   </Table.Row>
                   <Table.Row>
                     <Table.Cell>GSM</Table.Cell>
                     <Table.Cell>{info.gsm}</Table.Cell>
                   </Table.Row>
                   <Table.Row>
                     <Table.Cell>Email</Table.Cell>
                     <Table.Cell>{info.email}</Table.Cell>
                   </Table.Row>{" "}
                  
                 </Table.Body>
               </Table>
               </div>
            ))}
           
            
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{margin:"2em 0em 2em 0em "}}>
          <div className="col">
            <div className="container-fluid">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width={600}
                  height={450}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
