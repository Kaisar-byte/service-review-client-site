import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../SharedPages/Footer/Footer";
import Header from "../SharedPages/Header/Header";
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Dentist Jishan-Home page</title>
        <meta name="description" content="This Home Page" />
        <meta name="keywords" content="Dental, Service, Doctor, Teeth" />
      </Helmet>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
