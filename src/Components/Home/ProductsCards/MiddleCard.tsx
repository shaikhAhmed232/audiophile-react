import React from "react";
import { Link } from "react-router-dom";

// components import
import LazyLoadImg from "../../Common/LazyLoadImg";

function MiddleCard({
  id,
  productName,
  productImg,
}: {
  id: number;
  productName: string;
  productImg: string;
}) {
  return (
    <div className="bg-gray-gradient flex ss:flex-row flex-col sm:justify-between items-center ss:px-8 ss:py-0 py-5 mt-5 rounded-[8px]">
      <div className="flex flex-col px-5">
        <h1 className="self-center font-poppins text-[1.5rem] font-[700] text-primaryBlack ss:text-start text-center">
          {productName}
        </h1>
        <Link
          to={`/product/${id}`}
          className="border-[1px] border-solid border-primaryBlack text-primaryBlack self-center bg-transparent py-3 px-5 tracking-[3px] ss:my-2 my-5"
        >
          see product
        </Link>
      </div>
      <div className="w-[300px] h-[300px]">
        <LazyLoadImg
          src={productImg}
          alt={productName}
          classes="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  );
}

export default MiddleCard;
