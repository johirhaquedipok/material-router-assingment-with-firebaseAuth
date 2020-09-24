import Footer from "../components/header/Footer";
import Header from "../components/header/Header";
import React from "react";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {
        props.children
      }
      <Footer></Footer>
    </div>
  );
};

export default Layout;
