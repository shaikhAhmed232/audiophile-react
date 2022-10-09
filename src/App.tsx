// react imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import MainLayout from "./Components/Layouts/MainLayout";
import Wrapper from "./Components/Layouts/Wrapper";
import LoadingPage from "./Components/Skeletons/LoadinPage";

// import pages
// import HomePage from "./pages/HomePage";
const HomePage = React.lazy(() => import("./pages/HomePage"));
// import ProductPage from "./pages/ProductPage";
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
// import CategoryPage from "./pages/CategoryPage";
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
// import CheckoutPage from "./pages/CheckoutPage";
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <MainLayout>
          <React.Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </React.Suspense>
        </MainLayout>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
