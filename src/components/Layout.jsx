import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">mysite-react</div>
          <Header />
        </div>
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
