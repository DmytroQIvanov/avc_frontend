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
      state.firstFetch = true;
      state.loading = false;
      // state.errorMessage = data.payload.data.message;
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
        if (elem.ID == data.payload.data.orderId) {
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
        if (elem.ID == data.payload.data.orderId) {
          state.user?.basket.splice(indx, 1);
          return;
        }
      });
    },
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
} = userSlice.actions;

export default userSlice.reducer;
