import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Layout5 = (props) => {
  return (
    <div className="studio-main landing-page">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout5;
