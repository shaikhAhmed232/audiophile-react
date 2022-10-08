import React from "react";

function ProductCardSkeleton() {
  return (
    <div className="grid h-[400px] w-[300px] bg-dimWhite rounded-[8px]">
      <div className="w-full h-[60%] bg-lightBlack"></div>
      <div className="py-2 text-center">
        <div className="w-[100px]"></div>
        <div className="sm:self-start self-center text-primaryWhite py-3 px-6 rounded-[1px] mt-2"></div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
