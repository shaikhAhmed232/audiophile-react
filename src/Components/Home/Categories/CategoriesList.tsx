import React from "react";

// components import
import CategoryCard from "./CategoryCard";

// local imports
import { productCategories, CategoryType } from "../../../data";

function CategoriesList() {
  return (
    <div className="sm:w-full w-[90%] sm:mx-0 mx-auto flex ss:flex-row ss:justify-between xs:flex-wrap flex-col">
      {productCategories.map((category: CategoryType) => {
        return <CategoryCard key={category.id} {...category} />;
      })}
    </div>
  );
}

export default CategoriesList;
