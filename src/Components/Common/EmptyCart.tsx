import React from "react";

import EmptyCartIcon from "../Icons/EmptyCartIcon";

function EmptyCart({ isSummary }: { isSummary: boolean }) {
  return (
    <div
      className={`bg-white flex flex-col items-center shadow-dimShadow p-4 ss:w-[30%] w-full max-h-[370px]  ${
        isSummary ? "z-[0]" : "absolute right-0 top-[100%] z-[2]"
      }  animate-cart`}
    >
      <EmptyCartIcon />
      <h1 className="font-[700] text-[0.8rem] text-primaryBlack font-barlow">
        Cart is empty
      </h1>
    </div>
  );
}

export default EmptyCart;
