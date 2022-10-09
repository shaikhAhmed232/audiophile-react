import React from "react";

function ProductCardSkeleton() {
  return (
    <div className="h-[300px] w-full bg-dimWhite rounded-[8px]">
      <div className="w-full h-[70%] bg-lightBlack"></div>
      <div className="py-4 text-center px-2">
        <div className="w-[100px] h-[10px] mx-auto bg-lightBlack"></div>
        <div className="sm:self-start self-center text-primaryWhite py-3 px-6 rounded-[1px] mt-2 bg-lightBlack"></div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
