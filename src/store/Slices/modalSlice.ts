import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  mobileSideBar: boolean;
  mobileSearch: boolean;
  mobileControlSidePanel: boolean;
  mobileburgerSidePanel: boolean;
}

const initialState: ModalState = {
  mobileSideBar: false,
  mobileSearch: false,
  mobileControlSidePanel: false,
  mobileburgerSidePanel: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    mobileSideBar: (state, data) => {
      state.mobileSideBar = !state.mobileSideBar;
    },
    mobileSearch: (state, data) => {
      state.mobileSearch = !state.mobileSearch;
    },
    mobileControlSodePanel: (state, data) => {
      state.mobileControlSidePanel = !state.mobileControlSidePanel;
    },
    mobileburgerSidePanel: (state, data) => {
      state.mobileburgerSidePanel = !state.mobileburgerSidePanel;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  mobileSideBar,
  mobileSearch,
  mobileControlSodePanel,
  mobileburgerSidePanel,
} = ModalSlice.actions;

export default ModalSlice.reducer;
