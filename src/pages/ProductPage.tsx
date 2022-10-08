import React from "react";
import { useParams } from "react-router-dom";

// component imports
import Product from "../Components/Product/Product";
import Features from "../Components/Product/Fetures";
import ProductPageCommonSection from "../Components/Product/ProductPageCommonSection";
import Suggestions from "../Components/Product/Suggestions";
import About from "../Components/Home/About";

// local import
import { products, ProductType } from "../data";

function ProductPage() {
  const [product, setProduct] = React.useState<ProductType | null>(null);
  const { id } = useParams();
  React.useEffect(() => {
    const product = products.filter((each: ProductType) => {
      if (id) {
        return parseInt(id) === each.id;
      } else return null;
    })[0];
    setProduct({ ...product });
  }, [id]);
  return (
    <>
      <Product product={product!} />
      <Features features={product?.features} includes={product?.includes} />
      <ProductPageCommonSection />
      <Suggestions />
      <About />
    </>
  );
}

export default ProductPage;
