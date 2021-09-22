import { IProduct } from "../../Interfaces/IProduct";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  product: IProduct | null;
  createData: {
    arrayOfWeight: string[];
    arrayOfTaste: string[];
  };
  productType: string | null;
  loading: boolean;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  productType: null,

  createData: {
    arrayOfWeight: [],
    arrayOfTaste: [],
  },
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

    postComment(state, action) {
      // state.productType = action.payload;
    },

    addArrayOfWeight(state, action) {
      console.log(action.payload);
      state.createData.arrayOfWeight[action.payload.i] = action.payload.data;
    },
    addArrayOfTaste(state, action) {
      state.createData.arrayOfTaste[action.payload.i] = action.payload.data;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductError,
  setProductType,
  postComment,
  addArrayOfWeight,
  addArrayOfTaste,
} = productSlice.actions;

export default productSlice.reducer;
