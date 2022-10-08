import React from "react";
import { Link } from "react-router-dom";

type UpperCardProps = {
  id: number;
  productImg: string;
  productName: string;
  productDescription: string;
};

function UpperCard({
  id,
  productImg,
  productName,
  productDescription,
}: UpperCardProps) {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-center items-center bg-primaryOrange text-primaryWhite rounded-[8px] sm:py-0 py-2 border-2 border-solid border-green">
      <div className="max-w-[400px] h-[400px] w-full">
        <img
          src={productImg}
          alt={productName}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="max-w-[400px] flex flex-col justify-center sm:px-8">
        <h1 className="font-poppins font-[700] xs:text-[2.3rem] text-[1.8rem] sm:text-start text-center">
          {productName}
        </h1>
        <p className="text-primaryGray ss:font-[16px] font-[12px] sm:text-start text-center">
          {productDescription}
        </p>
        <Link
          to={`/product/${id}`}
          className="bg-primaryBlack text-primaryWhite sm:self-start self-center py-3 px-5 mt-3 font-barlow rounded-[2px] tracking-[2px]"
        >
          see product
        </Link>
      </div>
    </div>
  );
}

export default UpperCard;
