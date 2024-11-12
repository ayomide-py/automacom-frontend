import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
        <div className="main-content">
          <Outlet />
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
