import { IProduct } from '../../Interfaces/IProduct';
import { call, put } from "redux-saga/effects";
import { requestGetProduct } from '../requests/product';
import { getProductError, getProductStart, getProductSuccess } from '../Slices/productSlice';
import { request } from '../requests/adminLogin';

export function* handleGetProduct  (data:any) {
  try {

    const response:IProduct = yield call(request,data.payload.url,data.payload.method,data.payload.data,data.payload.id,data.payload.key);
    yield put(getProductSuccess(response))


  } catch (error) {
    yield put(getProductError(error));

    console.log(error);
  }
}
