import { IUser } from "./../../Interfaces/IUser";
import { call, put } from "redux-saga/effects";
import { request } from "../requests/adminLogin";
import { getUsersError, getUsersSuccess } from "../Slices/usersSlice";

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
