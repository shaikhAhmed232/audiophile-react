import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { ProductType } from "../data";

export type CartEachProductType = {
  product: ProductType;
  quantity: number;
};

interface CartSliceInitialState {
  products: CartEachProductType[];
  totalProducts: number;
  totalPrice: number;
}

const initialState: CartSliceInitialState = {
  products: [],
  totalProducts: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductIntoCart: (state, action: PayloadAction<ProductType>) => {
      const productToPutIntoCart: ProductType = action.payload;
      const product = state.products.find(
        ({ product, quantity }) => product.id === productToPutIntoCart.id
      );
      if (product) {
        product.quantity += 1;
        state.totalProducts += 1;
        state.totalPrice += product.product.productPrice;
      } else {
        const newProduct = { product: productToPutIntoCart, quantity: 1 };
        state.products.push(newProduct);
        state.totalProducts += 1;
        state.totalPrice += newProduct.product.productPrice;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productToRemove = state.products.find(
        ({ product }) => product.id === action.payload
      );
      if (productToRemove!.quantity > 1) {
        productToRemove!.quantity -= 1;
        state.totalProducts -= 1;
        state.totalPrice -= productToRemove!.product.productPrice;
      } else {
        state.products = state.products.filter(
          ({ product }) => product.id !== action.payload
        );
        state.totalProducts -= 1;
        state.totalPrice -= productToRemove!.product.productPrice;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
      state.totalProducts = 0;
    },
  },
});

// Action creators
export const { addProductIntoCart, removeProductFromCart, clearCart } =
  cartSlice.actions;

// getting each value from store
export const getCartProducts = (state: RootState) => state.cart.products;
export const getProductsCount = (state: RootState) => state.cart.totalProducts;
export const getTotalAmountOfCart = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
