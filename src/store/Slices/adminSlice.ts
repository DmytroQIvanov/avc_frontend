import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../Interfaces/IUser";

export interface AdminState {
  login: string | null;
  loading: boolean;
  firstFetch: boolean;
  adminData: { orders: IOrder[] };
}

const initialState: AdminState = {
  login: null,
  loading: false,
  firstFetch: false,
  adminData: { orders: [] },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminLoginStart: (state, data) => {
      state.loading = true;
    },
    adminLoginSuccess: (state, data) => {
      state.loading = false;
      state.login = data.payload.login;
      state.firstFetch = true;
    },
    adminLoginError: (state, data) => {
      state.loading = false;
      state.firstFetch = true;
    },

    adminGetOrdersStart(state, data) {
      // state.adminData.orders = data.payload;
    },
    adminGetOrdersSuccess(state, data) {
      state.adminData.orders = data.payload;
    },

    adminDeleteOrderStart(state, data) {
      // state.adminData.orders.splice(data.payload, 1);
    },
    adminDeleteOrder(state, data) {
      state.adminData.orders.splice(data.payload, 1);
    },

    adminDeleteUserStart(state, data) {
      // state.adminData.orders.splice(data.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  adminLoginStart,
  adminLoginSuccess,
  adminLoginError,
  adminGetOrdersStart,
  adminGetOrdersSuccess,
  adminDeleteOrder,
  adminDeleteOrderStart,
  adminDeleteUserStart,
} = adminSlice.actions;

export default adminSlice.reducer;
