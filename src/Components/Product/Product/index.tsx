import React from "react";

// components imports
import Container from "../../Common/Container";
import LazyLoadImg from "../../Common/LazyLoadImg";
// local imports
import { styles } from "../../../style";
import { ProductType } from "../../../data";
import { useAppDispatch } from "../../../Hooks/reduxHooks";
import { addProductIntoCart } from "../../../slices/cartSlice";

function Product({ product }: { product: ProductType }) {
  const dispatch = useAppDispatch();

  return (
    <section className={styles.sectionPadding}>
      <Container>
        <div className="flex sm:flex-row flex-col">
          <div className="sm:w-[400px] w-full h-[300px]">
            <LazyLoadImg
              src={product?.productImg}
              alt={product?.productName}
              classes="w-full h-[100%] object-contain"
            />
          </div>
          <div className="w-[100%] flex justify-center">
            <div className="max-w-[400px]">
              {product?.isNew ? (
                <p className="uppercase tracking-[10px] text-primaryBlack ss:text-[0.8rem] text-[8px]  opacity-[0.6]">
                  new product
                </p>
              ) : null}
              <h1 className="font-[700] text-[2rem] text-primaryBlack font-poppins">
                {product?.productName}
              </h1>
              <p className="opacity-[0.8]">{product?.productDescription}</p>
              <strong className="text-primaryBlack">
                Rs. {product?.productPrice}
              </strong>
              <button
                className="block bg-primaryOrange text-primaryWhite mx-auto mt-2 py-[0.4rem] px-[1rem] rounded-[2px] tracking-[0.9px] uppercase"
                onClick={() => dispatch(addProductIntoCart(product))}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Product;
