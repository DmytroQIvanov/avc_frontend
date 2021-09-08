import { IProductLength } from "./../../Interfaces/IProductsLength";
import { call, put } from "redux-saga/effects";
import { request } from "../requests/adminLogin";
import {
  getSideBarLengthError,
  getSideBarLengthSuccess,
} from "../Slices/sideBarSlice";

export function* handleSideBar(data: any) {
  try {
    const response: IProductLength = yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data
    );
    yield put(getSideBarLengthSuccess(response));
  } catch (error) {
    yield put(getSideBarLengthError(error));

    console.log(error);
  }
}
