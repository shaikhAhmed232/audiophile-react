import React from "react";
import { useNavigate } from "react-router-dom";

// local imports
import { ProductType } from "../../data";

function ProductCard({ id, productImg, productName }: ProductType) {
  const navigate = useNavigate();
  return (
    <div className="grid bg-dimWhite rounded-[8px]">
      <img
        src={productImg}
        alt="product"
        className="w-[100%] aspect-square object-cover"
      />
      <div className="py-2 text-center">
        <p className="font-[700] font-barlow">{productName}</p>
        <button
          onClick={() => navigate(`/product/${id}`)}
          className="bg-primaryOrange sm:self-start self-center text-primaryWhite py-3 px-6 rounded-[1px] mt-2"
        >
          see products
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
