import { IUser } from "../../Interfaces/IUser";
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  user: IUser | null;
  loading: boolean;
  firstFetch: boolean;
  language: string;
  productView: string;
  errorMessage: string | null;
}

const initialState: CounterState = {
  user: null,
  loading: false,
  firstFetch: false,
  errorMessage: null,
  productView: "square",
  language: "ru",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginStart: (state, data) => {
      state.loading = true;
    },
    userLoginSuccess: (state, data) => {
      state.firstFetch = true;
      state.loading = false;
      state.user = data.payload.user;
    },
    userLoginError: (state, data) => {
      state.errorMessage = data.payload;
      state.firstFetch = true;
      state.loading = false;
      // state.errorMessage
    },
    userChangeLanguage: (state, data) => {
      state.language = data.payload;
    },
    userChangeProductView: (state, data) => {
      state.productView = data.payload;
      localStorage.setItem("productView", data.payload);
    },
    changeOrderQuantity(state, data) {
      state.user?.basket.map((elem) => {
        if (elem.product.name == data.payload.data.name) {
          if (elem.quantity + data.payload.data.changedQuantity <= 0) {
            elem.quantity = 0;
            return;
          }
          elem.quantity += data.payload.data.changedQuantity;
          return;
        }
      });
    },
    deleteOrderProduct(state, data) {
      state.user?.basket.map((elem, indx) => {
        if (elem.product.name == data.payload.data.name) {
          state.user?.basket.splice(indx, 1);
          return;
        }
      });
    },

    addProductToBasketStart(state, data) {},
    addProductToBasketSuccess(state, data) {
      console.log(data.payload);
      let original = true;
      state.user?.basket.map((elem, indx) => {
        if (elem.product.name == data.payload.data.product.name) {
          elem.quantity += data.payload.data.quantity;
          original = false;
          return;
        }
      });
      if (original) {
        state.user?.basket.push({
          product: data.payload.data.product,
          quantity: data.payload.data.quantity,
          taste: data.payload.data.taste,
          weight: data.payload.data.weight,
        });
      }
    },

    addProductToFavouriteStart(state, data) {},
    addProductToFavouriteSuccess(state, data) {
      console.log(data.payload);
      let original = true;
      state.user?.favourite.map((elem, indx) => {
        if (elem.name == data.payload.name) {
          original = false;
          return;
        }
      });
      if (original) {
        state.user?.favourite.push(data.payload.product);
      }
    },
    addProductToFavouriteError(state, data) {},
  },
});

// Action creators are generated for each case reducer function
export const {
  userLoginError,
  userLoginStart,
  userLoginSuccess,

  userChangeLanguage,
  userChangeProductView,

  changeOrderQuantity,
  deleteOrderProduct,

  addProductToBasketStart,
  addProductToBasketSuccess,

  addProductToFavouriteStart,
  addProductToFavouriteSuccess,
  addProductToFavouriteError,
} = userSlice.actions;

export default userSlice.reducer;
