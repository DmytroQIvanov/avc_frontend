import { IUser } from './../../Interfaces/IUser';
import { call, put } from "redux-saga/effects";
import { request } from '../requests/adminLogin';
import { userLoginError, userLoginSuccess } from '../Slices/userSlice';

export function* handleUserLogin  (data:any) {
  try {

    const response:IUser = yield call(request,data.payload.url,data.payload.method,data.payload.data);
    console.log(response)
    yield put(userLoginSuccess(response))


  } catch (error) {
    yield put(userLoginError(error));

    console.log(error);
  }
}
