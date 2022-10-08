import React from "react";

// components import
import Container from "../Common/Container";
import ProductCard from "../Common/ProductCard";
import CategoriesList from "../Home/Categories/CategoriesList";

// local imports
import { styles } from "../../style";
import { pickRandomProducts, ProductType } from "../../data";

function Suggestions() {
  const [products, setProducts] = React.useState<ProductType[]>();
  React.useEffect(() => {
    const randomProducts = pickRandomProducts();
    setProducts(randomProducts);
  }, []);

  return (
    <section className={styles.sectionPadding}>
      <Container>
        <div className="sm:px-0 xs:px-[1rem] px-4">
          <h1 className="text-center mb-4 text-[1.5rem] font-[700] capitalize font-barlow">
            you may also like
          </h1>
          <div className="w-full grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 xs:gap-x-2 gap-y-2">
            {products?.map((product: ProductType, index: number) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div>
            <CategoriesList />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Suggestions;
