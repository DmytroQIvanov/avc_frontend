import { IProductLength } from "./../../Interfaces/IProductsLength";
import { IProduct } from "./../../Interfaces/IProduct";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductsState {
  products: IProduct[];
  numberOfProducts: number;
  loading: boolean;
  key: string;
  quantity: number;
  types: string[];
  // sidebar: IProductLength;
}

const initialState: ProductsState = {
  products: [],
  numberOfProducts: 0,
  loading: false,
  key: "",
  types: [],
  quantity: 20,
  // sidebar: {
  //   MegaAminoMix: 0,
  //   BCAA_L_glutamine: 0,
  // bcaa: 0,ss
  // gainer: 0,
  // protein: 0,
  // smartVater: 0,
  // },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsStart(state, data) {
      state.loading = true;
    },

    getProductsSuccess(state, action) {
      console.log(action);
      state.products = action.payload.products;
      console.log(state.products);
      state.loading = false;
    },
    getProductsError(state, action) {
      state.loading = false;
    },

    getProducts: (state, data) => {
      state.products = data.payload.products;
      state.numberOfProducts = data.payload.numberOfProducts;
    },
    setProductsKey: (state, data) => {
      state.key = data.payload;
    },
    setProductsTypes: (state, data) => {
      state.types = data.payload;
    },
    // setSideBar: (state, data) => {
    //   state.sidebar = data.payload;
    // },
  },
});

export const {
  getProducts,
  getProductsStart,
  getProductsSuccess,
  getProductsError,
  setProductsKey,
  setProductsTypes,
  // setSideBar,
} = productsSlice.actions;

export default productsSlice.reducer;
