import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Layout = (props) => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>{props.children}</div>
    </section>
  );
};

export default Layout;
