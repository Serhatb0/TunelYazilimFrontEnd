import React from "react";
import { Route } from "react-router-dom";
import AdminLoginPage from "../Admin/AdminComponents/AdminLogin/AdminLoginPage";

import AboutUsPage from "../components/AboutUs/AboutUsPage";
import ContactPage from "../components/Contact/ContactPage";
import HomePage from "../components/Home/HomePage";
import NewsPage from "../components/News/NewsPage";
import NewsPageDteail from "../components/News/NewsPageDteail";
import ProductDteailPage from "../components/Product/ProductDteailPage";
import ProductPage from "../components/Product/ProductPage";
import References from "../components/References/References";
import VideoPage from "../components/Video/VideoPage";
import VideoPageDteail from "../components/Video/VideoPageDteail";
import Footer from "./Footer";
import Navi from "./Navi";

function Dashboard() {
  
    return (
      <div>
        {" "}
        <Navi></Navi>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutUsPage} />
        <Route exact path="/references" component={References} />
        <Route exact path="/products" component={ProductPage} />
        <Route exact path="/products/:id" component={ProductDteailPage} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/news/:id" component={NewsPageDteail} />
        <Route exact path="/video" component={VideoPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="/video/:id" component={VideoPageDteail} />
        <Route path="/admin" component={AdminLoginPage } />

        <Footer></Footer>
      </div>)
}

export default Dashboard;
