import React, { SetStateAction, Dispatch } from "react";

import { useAppSelector } from "../../Hooks/reduxHooks";
import { getProductsCount } from "../../slices/cartSlice";

export default function CartIcon({
  setShowCart,
}: {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}) {
  const [hover, setHover] = React.useState(false);
  const totalProducts = useAppSelector(getProductsCount);
  return (
    <div
      className="cursor-pointer transition relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setShowCart((prev) => !prev)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={!hover ? "#f2f2f2" : "#e9967a"}
        className={`w-8 h-8`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      {totalProducts < 1 ? null : (
        <div className="absolute bg-inherit text-primaryOrange font-[700] w-[20px] h-[20px] flex justify-center items-center rounded-full text-[1rem] right-[1px] top-[-10px]">
          {totalProducts}
        </div>
      )}
    </div>
  );
}
