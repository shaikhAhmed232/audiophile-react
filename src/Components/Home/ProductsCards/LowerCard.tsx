import React from "react";
import { Link } from "react-router-dom";

// components import
import LazyLoadImg from "../../Common/LazyLoadImg";

function LowerCard({
  id,
  productName,
  productImg,
}: {
  id: number;
  productName: string;
  productImg: string;
}) {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between mt-5">
      <div className="sm:w-[50%] h-[250px] w-[100%] bg-primaryBlack mr-[10px] rounded-[8px]">
        <LazyLoadImg
          src={productImg}
          alt={productName}
          classes="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div className="sm:w-[50%] flex items-center justify-center flex-col w-full bg-dimWhite rounded-[8px] sm:ml-[10px] ml-0 sm:mt-0 mt-3">
        <h1 className="text-primaryBlack text-[1.5rem] font-[700] text-center ">
          {productName}
        </h1>
        <Link
          to={`/product/${id}`}
          className="border-[1px] border-solid border-primaryBlack text-primaryBlack self-center bg-transparent py-3 px-5 tracking-[3px] ss:my-2 my-5"
        >
          see product
        </Link>
      </div>
    </div>
  );
}

export default LowerCard;
