import { call, put } from "redux-saga/effects";
import { request } from "../requests/adminLogin";
import {
  adminDeleteOrder,
  adminGetOrdersSuccess,
  adminLoginError,
  adminLoginSuccess,
} from "../Slices/adminSlice";
import { IOrder } from "../../Interfaces/IUser";

export function* handleAdminLogin(data: any) {
  try {
    const response: { login: string } = yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data
    );
    console.log(response);
    yield put(adminLoginSuccess(response));
  } catch (error) {
    yield put(adminLoginError(error));

    console.log(error);
  }
}

export function* handleGetOrders(data: any) {
  try {
    const response: IOrder[] = yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data
    );
    console.log(response);
    yield put(adminGetOrdersSuccess(response));
  } catch (error) {
    // yield put(adminLoginError(error));

    console.log(error);
  }
}
export function* handleDeleteORder(data: any) {
  try {
    yield put(adminDeleteOrder(data.payload.index));
    yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data
    );
  } catch (error) {
    // yield put(adminLoginError(error));

    console.log(error);
  }
}

export function* handleDeleteUser(data: any) {
  try {
    // yield put(adminDeleteUser(data.payload.index));
    yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data
    );
  } catch (error) {
    // yield put(adminLoginError(error));

    console.log(error);
  }
}
