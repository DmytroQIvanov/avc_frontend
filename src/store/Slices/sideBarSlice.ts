import { IProductLength } from "../../Interfaces/IProductsLength";
import { createSlice } from "@reduxjs/toolkit";

interface SideBarState {
  sidebarLength: IProductLength;
  loading: boolean;
}

const initialState: SideBarState = {
  sidebarLength: {
    bcaa: 0,
    gainer: 0,
    protein: 0,
    smartVater: 0,
  },
  loading: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    getSideBarLengthStart(state, data) {
      state.loading = true;
    },

    getSideBarLengthSuccess(state, data) {
      state.sidebarLength = data.payload;
      state.loading = false;
    },
    getSideBarLengthError(state, data) {
      state.loading = false;
    },
  },
});

export const {
  getSideBarLengthStart,
  getSideBarLengthSuccess,
  getSideBarLengthError,
} = sideBarSlice.actions;

export default sideBarSlice.reducer;
