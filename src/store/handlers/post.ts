import { IPost } from "./../../Interfaces/IPost";
import { call, put } from "redux-saga/effects";
import { request } from "../requests/adminLogin";
import { getPostError, getPostSuccess } from "../Slices/postSlice";

export function* handlePost(data: any) {
  try {
    const response: IPost = yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data
    );
    console.log(response);
    yield put(getPostSuccess(response));
  } catch (error) {
    yield put(getPostError(error));

    console.log(error);
  }
}
