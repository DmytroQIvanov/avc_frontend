import { IProduct } from './../../Interfaces/IProduct';
import { call, put } from "redux-saga/effects";
import { getProductsError, getProductsSuccess } from '../Slices/productsSlice';
import { request } from '../requests/adminLogin';

export function* handleGetProducts(data:any) {
  try {

    const response:IProduct[] = yield call(request,data.payload.url,data.payload.method,data.payload.data,data.payload.id,data.payload.key);
    console.log(response)
    yield put(getProductsSuccess(response))


  } catch (error) {
    yield put(getProductsError(error));

    console.log(error);
  }
}
