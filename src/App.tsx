// react imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import MainLayout from "./Components/Layouts/MainLayout";
import Wrapper from "./Components/Layouts/Wrapper";

// import pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </MainLayout>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
