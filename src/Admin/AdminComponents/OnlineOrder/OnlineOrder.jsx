/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Pagination, Table } from "semantic-ui-react";
import OnlineOrderService from "../../../services/onlineOrderService";

function OnlineOrder() {
    const [order, setOrder] = useState([]);
    const [Id, setId] = useState()
    const onlineOrderService = new OnlineOrderService();
    useEffect(() => {
        onlineOrderService
        .getOrder()
        .then((result) => setOrder(result.data.data));
    }, []);
  
    
    return (
      <div>
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Sipariş <b>Bilgileri</b>
                  </h2>
                </div>
              </div>
            </div>
            <Table stackable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Adres</Table.HeaderCell>
                  <Table.HeaderCell>Ad Soyad</Table.HeaderCell>
                  <Table.HeaderCell>Not</Table.HeaderCell>
  
                  <Table.HeaderCell>Telefon</Table.HeaderCell>
  
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
  
              <Table.Body>
                {order.map((or) => (
                  <Table.Row key={or.id}>
                    <Table.Cell>{or.address}</Table.Cell>
                    <Table.Cell>{or.firstName}</Table.Cell>
                    <Table.Cell>{or.note}</Table.Cell>
                    <Table.Cell>{or.phone}</Table.Cell>
  
                    <Table.Cell>
                      <a
                        href="#deleteContactModal"
                        className="delete"
                        data-toggle="modal"
                        onClick={() => setId(or.id)}
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
                    onClick={() => onlineOrderService.delete(Id)}
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

export default OnlineOrder
