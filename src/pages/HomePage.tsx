import React from "react";

// components import
// import Container from "../Components/Shared/Container";
import Hero from "../Components/Home/Hero";
import Categories from "../Components/Home/Categories";
import ProductsCard from "../Components/Home/ProductsCards";
import About from "../Components/Home/About";

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <ProductsCard />
      <About />
    </>
  );
}

export default HomePage;
