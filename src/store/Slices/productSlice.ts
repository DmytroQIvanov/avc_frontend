import { IProduct } from "../../Interfaces/IProduct";
import { createSlice } from "@reduxjs/toolkit";
import { a } from "react-spring";

export interface ProductState {
  product: IProduct | null;
  productType: string | null;
  loading: boolean;

  choosenState: {
    weight: number;
    taste: number;
  };

  productVariant: {
    taste: string;
    // image: Blob[];
    property: {
      weight: string;
      price: number;
    }[];
    quantityOfGoods: number;
  }[];
}

const initialState: ProductState = {
  product: null,
  loading: false,
  productType: null,

  choosenState: {
    weight: 0,
    taste: 0,
  },

  productVariant: [
    {
      taste: "",
      // image: [],
      property: [{ price: 0, weight: "" }],
      quantityOfGoods: 0,
    },
  ],
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
      // console.log(action.payload);
      // state.createData.arrayOfWeight[action.payload.i] = action.payload.data;
    },

    addKeyValue(state, action) {
      console.log(action.payload);
      // state.createData.keyValue[action.payload.i] = action.payload.data;
    },
    addArrayOfTaste(state, action) {
      // state.createData.arrayOfTaste[action.payload.i] = action.payload.data;
    },

    onHandleTaste(state, action) {
      // if(!state.productVariant[action.payload.i]) state.productVariant.push({taste:"",})
      state.productVariant[action.payload.i].taste = action.payload.data;
    },

    addImage(state, action) {
      // state.productVariant[action.payload.i].image.push(action.payload);
    },
    onHandlePrice(state, action) {
      state.productVariant[action.payload.i].property[action.payload.i2].price =
        action.payload.data;
    },
    onHandleWeight(state, action) {
      state.productVariant[action.payload.i].property[
        action.payload.i2
      ].weight = action.payload.data;
    },
    addVariantWeight(state, action) {
      state.productVariant[action.payload.i].property.push({
        price: 0,
        weight: "",
      });
    },
    addProductVariant(state) {
      state.productVariant.push({
        taste: "",
        // image: [],
        property: [{ price: 0, weight: "" }],
        quantityOfGoods: 0,
      });
    },
    deleteProductVariant(state, action) {
      state.productVariant.splice(action.payload.index, 1);
    },
    chooseTaste(state, action) {
      state.choosenState.taste = action.payload;
      if (
        !state.product?.productVariant[state.choosenState.taste].property[
          state.choosenState.weight
        ]
      ) {
        state.choosenState.weight = 0;
      }
    },

    chooseWeight(state, action) {
      state.choosenState.weight = action.payload;
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
  addKeyValue,

  onHandleTaste,
  addProductVariant,
  deleteProductVariant,
  addImage,
  onHandleWeight,
  onHandlePrice,
  addVariantWeight,

  chooseTaste,
  chooseWeight,
} = productSlice.actions;

export default productSlice.reducer;
