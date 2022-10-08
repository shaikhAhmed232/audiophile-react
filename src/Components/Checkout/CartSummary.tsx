import React from "react";

// components import
import AmountDetails from "../Common/AmountDetails";
import CartProducts from "../Common/CartProducts";
import EmptyCart from "../Common/EmptyCart";

// local imports
import { useAppSelector } from "../../Hooks/reduxHooks";
import { getCartProducts, getTotalAmountOfCart } from "../../slices/cartSlice";
import { calculateGST, calculateGrandTotal, deliveryCharge } from "../../data";

import { ShippingInputType } from "./ShippingSection";
import { BillingInputType } from "./BillingSection";

type SummaryProps = {
  shippingInput: ShippingInputType;
  billingInput: BillingInputType;
};

function CartSummary({ shippingInput, billingInput }: SummaryProps) {
  const products = useAppSelector(getCartProducts);
  const totalAmount = useAppSelector(getTotalAmountOfCart);

  if (!products.length) {
    return <EmptyCart isSummary={true} />;
  }
  return (
    <div
      className={`bg-white shadow-dimShadow p-4 ss:w-[30%] max-h-[450px] w-full ss:mt-0 mt-6`}
    >
      <h3 className="text-[1rem] uppercase font-[700] font-barlow">summary</h3>
      <CartProducts isSummary={true} products={products} />
      <div className="mt-3">
        <AmountDetails amountKey="Total" amount={totalAmount} />
        <AmountDetails amountKey="Delivery Charge" amount={deliveryCharge} />
        <AmountDetails amountKey="GST" amount={calculateGST(totalAmount)} />
        <AmountDetails
          amountKey="Grand Total"
          amount={calculateGrandTotal(totalAmount)}
        />
      </div>
      <button
        type="submit"
        className="bg-primaryOrange sm:self-start self-center text-primaryWhite py-2 mt-3 text-[0.9rem] font-[700] capitalize tracking-[1px] w-full rounded-[1px]"
      >
        continue and pay
      </button>
    </div>
  );
}

export default CartSummary;
