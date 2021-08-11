/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button,  Table } from "semantic-ui-react";
import ContactFormService from "../../../services/contactFormService";
import "./Css/Contact.css";

function ContactView() {
  const [contact, setContact] = useState([]);
  const [contactId, setcontactId] = useState();
  const contactFormService = new ContactFormService();
  useEffect(() => {
    contactFormService
      .getContactForm()
      .then((result) => setContact(result.data.data));
  }, []);

  const handleChange= (event) =>{
    event.preventDefault();
  }
  return (
    <div>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  İletişim <b>Bilgileri</b>
                </h2>
              </div>
            </div>
          </div>
          <Table stackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ad Ve Soyadı</Table.HeaderCell>
                <Table.HeaderCell>Telefon</Table.HeaderCell>
                <Table.HeaderCell>Gsm</Table.HeaderCell>

                <Table.HeaderCell>Email</Table.HeaderCell>

                <Table.HeaderCell>Mesaj</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {contact.map((con,ind) => (
                <Table.Row key={con.id}>
                  <Table.Cell>{con.firstName}</Table.Cell>
                  <Table.Cell>{con.phone}</Table.Cell>
                  <Table.Cell>{con.gsm}</Table.Cell>
                  <Table.Cell>{con.email}</Table.Cell>

                  <Table.Cell>{con.message}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#deleteContactModal"
                      className="delete"
                      data-toggle="modal"
                      onClick={() => setcontactId(con.id)}
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
          
        </div>
      </div>

      {/* Delete Modal HTML */}
      <div id="deleteContactModal" className="modal fade">
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
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>Silmek İstediginize Emin Misiniz?</p>
                
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="İptal"
                />
                <Button
                handleChange={handleChange}
                  onClick={() => contactFormService.delete(contactId)}
                  inverted
                  color="green"
                >
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

export default ContactView;
