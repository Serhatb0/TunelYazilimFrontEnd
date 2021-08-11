/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink, Route, Switch } from "react-router-dom";
import ProductDteail from "../AdminComponents/Product/ProductDteail";
import ContactView from "../AdminComponents/Contact/ContactView";
import Product from "../AdminComponents/Product/Product";
import References from "../AdminComponents/References/References";
import Video from "../AdminComponents/Video/Video";
import "./css/sb-admin-2.min.css";
import News from "../AdminComponents/News/News";
import ContactInformation from "../AdminComponents/contactInformation/ContactInformation";
import OnlineOrder from "../AdminComponents/OnlineOrder/OnlineOrder";
import { Button } from "semantic-ui-react";
import AboutUs from "../AdminComponents/AboutUs/AboutUs";
import CustomerFeedback from "../AdminComponents/CustomerFeedback/CustomerFeedback";

export default function EmployeeNavi() {
  return (
    <div>
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              Admin <sup></sup>
            </div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Serhat Biricik</span>
            </a>
          </li>

          <hr className="sidebar-divider" />

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-person-lines-fill" />
              <span>İletişim</span>
            </a>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">İletişim</h6>
                <Nav.Link
                  className="collapse-item  "
                  as={NavLink}
                  to="/admin/ContactView"
                  style={{ width: "13em" }}
                >
                  İletişim Bilgilerini Göster
                </Nav.Link>
              </div>
            </div>
            <hr className="sidebar-divider" />

            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseref"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-person-lines-fill" />
              <span>Referanslar</span>
            </a>

            <hr className="sidebar-divider" />

            <div
              id="collapseref"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Referanslar</h6>
                <div class="list-group" id="list-tab" role="tablist">
                  <Nav.Link
                    className="collapse-item  "
                    as={NavLink}
                    style={{ width: "13em" }}
                    to="/admin/references"
                  >
                    Referanslar
                  </Nav.Link>
                </div>
              </div>
            </div>

            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsevideo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-person-lines-fill" />
              <span>Video</span>
            </a>
            <div
              id="collapsevideo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Video Bilgileri</h6>
                <div class="list-group" id="list-tab" role="tablist">
                  <Nav.Link
                    className="collapse-item  "
                    as={NavLink}
                    style={{ width: "13em" }}
                    to="/admin/video"
                  >
                    Video
                  </Nav.Link>
                </div>
              </div>
            </div>
            <hr className="sidebar-divider" />

            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseProduct"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-person-lines-fill" />
              <span>Ürunler</span>
            </a>
            <div
              id="collapseProduct"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Ürunler</h6>
                <Nav.Link
                  className="collapse-item  "
                  as={NavLink}
                  to="/admin/product"
                  style={{ width: "13em" }}
                >
                  Ürunler
                </Nav.Link>
                <Nav.Link
                  className="collapse-item  "
                  as={NavLink}
                  to="/admin/productAdmindteail"
                  style={{ width: "13em" }}
                >
                  Ürun Detayı
                </Nav.Link>
              </div>
            </div>
            <hr className="sidebar-divider" />

            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseNews"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-person-lines-fill" />
              <span>Haberler</span>
            </a>
            <div
              id="collapseNews"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Haber Bilgileri</h6>
                <div class="list-group" id="list-tab" role="tablist">
                  <Nav.Link
                    className="collapse-item  "
                    as={NavLink}
                    style={{ width: "13em" }}
                    to="/admin/news"
                  >
                    Haberler
                  </Nav.Link>
                </div>
              </div>
            </div>
            <hr className="sidebar-divider" />

            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsecontactİnformation"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-person-lines-fill" />
              <span>İletişim Bilgileri</span>
            </a>
            <div
              id="collapsecontactİnformation"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">İletişim Bilgileri</h6>
                <div class="list-group" id="list-tab" role="tablist">
                  <Nav.Link
                    className="collapse-item  "
                    as={NavLink}
                    style={{ width: "13em" }}
                    to="/admin/contactinformation"
                  >
                    İletişim Bilgileri
                  </Nav.Link>
                </div>
              </div>
            </div>
            <hr className="sidebar-divider" />

            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsecontactorder"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-person-lines-fill" />
              <span>Sipariş Bilgileri</span>
            </a>
            <div
              id="collapsecontactorder"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Sipariş Bilgileri</h6>
                <div class="list-group" id="list-tab" role="tablist">
                  <Nav.Link
                    className="collapse-item  "
                    as={NavLink}
                    style={{ width: "13em" }}
                    to="/admin/order"
                  >
                    Sipariş Bilgileri
                  </Nav.Link>
                </div>
              </div>
            </div>

            <hr className="sidebar-divider" />

            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseabout"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-person-lines-fill" />
              <span>Hakkımızda Bilgileri</span>
            </a>
            <div
              id="collapseabout"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Hakkımızda</h6>
                <div class="list-group" id="list-tab" role="tablist">
                  <Nav.Link
                    className="collapse-item  "
                    as={NavLink}
                    style={{ width: "13em" }}
                    to="/admin/about"
                  >
                    Hakkımızda Bilgileri
                  </Nav.Link>
                </div>
              </div>
            </div>
            <hr className="sidebar-divider" />
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsecustomer"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="bi bi-person-lines-fill" />
              <span>Müşteri Yorumları</span>
            </a>
            <div
              id="collapsecustomer"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Müşteri</h6>
                <div class="list-group" id="list-tab" role="tablist">
                  <Nav.Link
                    className="collapse-item  "
                    as={NavLink}
                    style={{ width: "13em" }}
                    to="/admin/customer/feedback"
                  >
                    Müşteri Yorumları
                  </Nav.Link>
                </div>
              </div>
            </div>
          </li>

          {/* Divider */}
          <hr className="sidebar-divider" />

        
        </ul>
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* Sidebar Toggle (Topbar) */}
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars" />
              </button>
              {/* Topbar Search */}
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="bi bi-search" />
                    </button>
                  </div>
                </div>
              </form>
              {/* Topbar Navbar */}
              <ul className="navbar-nav ml-auto">
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw" />
                  </a>
                  {/* Dropdown - Messages */}
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Serhat Biricik
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1628685418/e9edvwj9syjwg4gsb53b.jpg"
                    />
                  </a>
                  {/* Dropdown - User Information */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <Button
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target="#logoutModal"
                      as={NavLink}
                      to={`/`}
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Çıkış Yap
                    </Button>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="tab-content col-12" id="nav-tabContent">
              <Switch>
                <Route
                  exact
                  path="/admin/contactView"
                  component={ContactView}
                />
                <Route exact path="/admin/references" component={References} />
                <Route exact path="/admin/video" component={Video} />
                <Route exact path="/admin/product" component={Product} />
                <Route exact path="/admin/news" component={News} />
                <Route
                  exact
                  path="/admin/contactinformation"
                  component={ContactInformation}
                />
                <Route exact path="/admin/order" component={OnlineOrder} />
                <Route exact path="/admin/about" component={AboutUs} />
                <Route exact path="/admin/customer/feedback" component={CustomerFeedback} />


                <Route
                  exact
                  path="/admin/productAdmindteail"
                  component={ProductDteail}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
