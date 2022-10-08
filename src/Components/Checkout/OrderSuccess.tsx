import React from "react";
import { useNavigate } from "react-router-dom";

// local imports
import { useAppSelector, useAppDispatch } from "../../Hooks/reduxHooks";
import { getTotalAmountOfCart, clearCart } from "../../slices/cartSlice";
import { calculateGrandTotal } from "../../data";

function OrderSuccess() {
  const totalAmount = useAppSelector(getTotalAmountOfCart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const redirectToHome = () => {
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="bg-primaryWhite shadow-dimShadow rounded-[5px] p-6">
      <div className="w-[60px] h-[60px] rounded-full bg-primaryOrange flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-[2rem] h-[2rem]"
        >
          <path
            fillRule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1
        className="mt-3 text-[1.8rem] font-[700] font-poppins uppercase"
        style={{ lineHeight: "2.2rem" }}
      >
        thank you <br className="md:block none" />
        for your order
      </h1>
      <p className="mt-3 font-[400] opacity-[0.8] font-poppins text-primaryBlack">
        you will receive your order in 3 to 4 working days.
      </p>
      <div className="mt-3 grid xs:grid-cols-2 grid-cols-1">
        <div className=" bg-primaryGray py-3 px-5 rounded-l-[3px]">
          <div className="flex items-center">
            <div className="w-[40px] h-[40px] bg-primaryOrange"></div>
            <div className="ml-3 text-[0.8rem] font-barlow font-[700]">
              product name
            </div>
          </div>
          <div className="font-[600] text-[0.7rem] opacity-[0.5] mt-3">
            Lorem ipsum dolor sit amet,
          </div>
        </div>
        <div className="bg-primaryBlack text-primaryWhite py-3 px-5 rounded-r-[3px]">
          <p className="font-[500] opacity-[0.8] font-poppins capitalize ">
            grand total
          </p>
          <h3 className="font-[700] font-poppins">
            Rs. {calculateGrandTotal(totalAmount)}
          </h3>
        </div>
      </div>
      <button
        onClick={redirectToHome}
        className="mt-3 text-[0.8rem] front-[700] w-full bg-primaryOrange text-primaryWhite uppercase tracking-[2px] font-poppins py-3 rounded-[3px]"
      >
        Back to product hunt!
      </button>
    </div>
  );
}

export default OrderSuccess;
