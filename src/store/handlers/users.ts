import { IUser } from "./../../Interfaces/IUser";
import { call, put } from "redux-saga/effects";
import { request } from "../requests/adminLogin";
import { getUsersError, getUsersSuccess } from "../Slices/usersSlice";
import {
  addProductToFavouriteError,
  addProductToFavouriteStart,
  addProductToFavouriteSuccess,
} from "../Slices/userSlice";

export function* handleUsers(data: any) {
  try {
    const response: IUser[] = yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data
    );
    console.log(response);
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersError(error));

    console.log(error);
  }
}

export function* handleAddProductToFavourite(data: any) {
  try {
    console.log(data.payload.data);
    yield put(addProductToFavouriteSuccess(data.payload.data.product));

    yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data.productId
    );
  } catch (error) {
    yield put(addProductToFavouriteError(error));

    console.log(error);
  }
}
