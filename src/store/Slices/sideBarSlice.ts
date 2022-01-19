import { IProductLength } from "../../Interfaces/IProductsLength";
import { createSlice } from "@reduxjs/toolkit";

interface SideBarState {
  sidebarLength: IProductLength;
  loading: boolean;
}

const initialState: SideBarState = {
  sidebarLength: {
    MegaAminoMix: 0,
    BCAA_L_glutamine: 0,
    Fat_Burner: 0,
    L_Carnitin: 0,
    Collagen: 0,
    Mg_B: 0,
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
      state.sidebarLength = { ...state.sidebarLength, ...data.payload };
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
