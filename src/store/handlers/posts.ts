import { IPost } from "./../../Interfaces/IPost";
import { call, put } from "redux-saga/effects";
import { request } from "../requests/adminLogin";
import { getPostsError, getPostsSuccess } from "../Slices/postSlice";

export function* handlePosts(data: any) {
  try {
    const response: IPost[] = yield call(
      request,
      data.payload.url,
      data.payload.method,
      data.payload.data
    );
    console.log(response);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsError(error));

    console.log(error);
  }
}
