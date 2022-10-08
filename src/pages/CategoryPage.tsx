import React from "react";
import { useParams } from "react-router-dom";

// component imports
import Container from "../Components/Common/Container";
import ProductCardSkeleton from "../Components/Skeletons/ProductCardSkeleton";
// import ProductCard from "../Components/Common/ProductCard";
// local import
import { products, ProductType } from "../data";
import { styles } from "../style";
// lazy import
const ProductCard = React.lazy(
  () => import("../Components/Common/ProductCard")
);

function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = React.useState<ProductType[]>(
    []
  );
  React.useEffect(() => {
    const categoryWiseProducts = products.filter(
      (product: ProductType) => product.category === category
    );
    setCategoryProducts(categoryWiseProducts);
  }, [category]);

  return (
    <div className={`${styles.sectionPadding}`}>
      <Container>
        <div className="w-full grid md:px-0 px-3 ss:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-[20px]">
          {categoryProducts.map((product: ProductType) => (
            <React.Suspense key={product.id} fallback={<ProductCardSkeleton />}>
              <ProductCard {...product} />
            </React.Suspense>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CategoryPage;
