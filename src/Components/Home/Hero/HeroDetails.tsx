import React from "react";
import { Link } from "react-router-dom";

type HeroDetailsType = {
  id: number;
  title: string;
  description: string;
};

function HeroDetails({ id, title, description }: HeroDetailsType) {
  return (
    <div className="sm:w-[400px] w-full flex flex-col justify-center sm:items-start items-center sm:static absolute top-0 left-0 right-0 bottom-0">
      <p className="uppercase tracking-[10px] text-primaryGray ss:text-[0.8rem] text-[8px]  opacity-[0.6]">
        new product
      </p>
      <h1 className="text-primaryWhite ss:text-[2rem] text-[1rem] font-[600]">
        {title}
      </h1>
      <p className="text-[0.9rem] text-primaryWhite opacity-[0.7] mt-[10px] mb-[20px] sm:text-start text-center">
        {description}
      </p>
      <Link
        to={`/product/${id}`}
        className=" bg-primaryOrange sm:self-start self-center text-primaryWhite py-3 px-6 rounded-[1px]"
      >
        See Product
      </Link>
    </div>
  );
}

export default HeroDetails;
