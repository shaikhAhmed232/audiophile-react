import React from "react";

// components imports
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
