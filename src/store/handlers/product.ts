import { IProduct } from "../../Interfaces/IProduct";
import { call, put } from "redux-saga/effects";
import {
  addArrayOfWeight,
  getProductError,
  getProductSuccess,
  postComment,
} from "../Slices/productSlice";
import { request } from "../requests/adminLogin";
import { addProductToBasketSuccess } from "../Slices/userSlice";

export function* handleGetProduct(data: any) {
  try {
    const response: IProduct = yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data,
      data.payload.id,
      data.payload.key
    );
    yield put(getProductSuccess(response));
  } catch (error) {
    yield put(getProductError(error));

    console.log(error);
  }
}

export function* handlePostComment(data: any) {
  try {
    yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data,
      data.payload.id
    );
    yield put(postComment(data.payload.data));
  } catch (error) {}
}

export function* handleAddArrayOfWeight(data: any) {
  try {
    yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data,
      data.payload.id
    );
    yield put(addArrayOfWeight(data.payload.data));
  } catch (error) {}
}

export function* handleAddProductToBasket(data: any) {
  yield console.log(data);

  yield put(addProductToBasketSuccess(data.payload));

  yield call(
    request,
    `/user/product/${data.payload.data.product.id}`,
    "POST",
    data.payload.data
  );
}
