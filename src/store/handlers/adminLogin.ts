import { call, put } from "redux-saga/effects";
import { request } from '../requests/adminLogin';
import { adminLoginError, adminLoginSuccess } from "../Slices/adminSlice";

export function* handleAdminLogin  (data:any) {
  try {

    const response:{login:string} = yield call(request,data.payload.url,data.payload.method,data.payload.data);
    console.log(response)
    yield put(adminLoginSuccess(response))


  } catch (error) {
    yield put(adminLoginError(error));

    console.log(error);
  }
}
