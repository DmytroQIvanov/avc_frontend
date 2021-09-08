import { takeLatest } from "redux-saga/effects";
import { handleAdminLogin } from "./handlers/adminLogin";
import { handlePosts } from "./handlers/posts";
import { handleGetProduct } from "./handlers/product";
import { handleGetProducts } from "./handlers/products";
import { handleSideBar } from "./handlers/sideBar";
import { handleUserLogin } from "./handlers/userLogin";
import { adminLoginStart } from "./Slices/adminSlice";
import { getPostsStart, getPostStart } from "./Slices/postSlice";
import { getProductStart } from "./Slices/productSlice";
import { getProductsStart } from "./Slices/productsSlice";
import { getSideBarLengthStart } from "./Slices/sideBarSlice";
import { userLoginStart } from "./Slices/userSlice";
import { handlePost } from "./handlers/post";

export function* watcherSaga() {
  yield takeLatest(getProductsStart, handleGetProducts);
  yield takeLatest(getProductStart, handleGetProduct);
  yield takeLatest(adminLoginStart, handleAdminLogin);
  yield takeLatest(userLoginStart, handleUserLogin);
  yield takeLatest(getSideBarLengthStart, handleSideBar);
  yield takeLatest(getPostsStart, handlePosts);
  yield takeLatest(getPostStart, handlePost);
}
