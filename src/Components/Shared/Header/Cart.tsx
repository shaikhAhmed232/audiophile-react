import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

// components import
import CartProducts from "../../Common/CartProducts";
import EmptyCart from "../../Common/EmptyCart";
// local imports
import {
  getCartProducts,
  getTotalAmountOfCart,
} from "../../../slices/cartSlice";
import { useAppSelector } from "../../../Hooks/reduxHooks";

function Cart({
  setShowCart,
}: {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}) {
  const products = useAppSelector(getCartProducts);
  const totalAmount = useAppSelector(getTotalAmountOfCart);
  const navigate = useNavigate();
  const gotoCheckout = () => {
    navigate("/checkout");
    setShowCart(false);
  };
  if (!products.length) {
    return <EmptyCart isSummary={false} />;
  }
  return (
    <div className="bg-white shadow-dimShadow p-4 ss:w-auto w-full min-w-[300px] absolute right-0 top-[100%] z-[2] animate-cart">
      <CartProducts isSummary={false} products={products} />
      <span className="w-[80%] h-[1px] bg-primaryGray block mx-auto"></span>
      <div className="flex justify-between">
        <span className="text-[0.9rem] font-[700] capitalize">total</span>
        <span className="text-[0.9rem] font-[700]">Rs.{totalAmount}</span>
      </div>
      <button
        className="bg-primaryOrange sm:self-start self-center text-primaryWhite py-2 mt-3 text-[0.9rem] font-[700] capitalize tracking-[1px] w-full rounded-[1px]"
        onClick={gotoCheckout}
      >
        buy products
      </button>
    </div>
  );
}

export default Cart;
