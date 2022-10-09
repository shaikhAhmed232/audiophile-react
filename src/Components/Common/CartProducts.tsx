import React from "react";

// components import
import LazyLoadImg from "./LazyLoadImg";

// local import
import { CartEachProductType } from "../../slices/cartSlice";
import { ProductType } from "../../data";
import { useAppDispatch } from "../../Hooks/reduxHooks";
import {
  addProductIntoCart,
  removeProductFromCart,
} from "../../slices/cartSlice";

const SummaryProductCount = ({
  productQuantity,
}: {
  productQuantity: number;
}) => (
  <div className="text-[0.8rem] text-primaryBlack opacity-[0.5] font-[500]">
    x{productQuantity}
  </div>
);

const CartProductCount = ({
  productQuantity,
  product,
}: {
  productQuantity: number;
  product: ProductType;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="px-2 border-[1px] border-solid border-primaryGray rounded-[3px] mt-1 mb-1">
      <button
        className="font-[700] text-primaryOrange bg-none"
        onClick={() => dispatch(addProductIntoCart(product))}
      >
        +
      </button>
      <p className="font-[700] text-primaryBlack">{productQuantity}</p>
      <button
        className="font-[700] text-primaryOrange bg-none"
        onClick={() => dispatch(removeProductFromCart(product.id))}
      >
        -
      </button>
    </div>
  );
};

function CartProducts({
  isSummary,
  products,
}: {
  isSummary: boolean;
  products: CartEachProductType[];
}) {
  return (
    <div
      className={`mt-2 ${isSummary ? "max-h-[300px]" : "max-h-[320px]"} ${
        products.length > 4 ? "overflow-y-scroll" : "overflow-y-hidden"
      } `}
    >
      {products.map(({ product, quantity }) => {
        return (
          <div key={product.id} className="flex items-center">
            <div className="w-[40px] h-[40px] bg-primaryGray">
              <LazyLoadImg
                src={product.productImg}
                alt={product.productName}
                classes="w-full h-[100%]"
              />
            </div>
            <div className="flex-1 py-[2px] px-[5px]">
              <span className="block text-[0.9rem] font-[700]">
                {product.productName}
              </span>
              <span className="text-primaryBlack font-[500] opacity-[0.5] text-[0.9rem]">
                Rs. {product.productPrice}
              </span>
            </div>
            {isSummary ? (
              <SummaryProductCount productQuantity={quantity} />
            ) : (
              <CartProductCount productQuantity={quantity} product={product} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CartProducts;
