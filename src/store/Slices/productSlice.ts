import { IProduct } from "../../Interfaces/IProduct";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  product: IProduct | null;
  productType: string | null;
  loading: boolean;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  productType: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductStart(state, id) {
      state.loading = true;
    },

    getProductSuccess(state, action) {
      console.log(action.payload);
      state.product = action.payload;
      state.loading = false;
    },
    getProductError(state, action) {
      state.loading = false;
    },

    setProductType(state, action) {
      state.productType = action.payload;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductError,
  setProductType,
} = productSlice.actions;

export default productSlice.reducer;
