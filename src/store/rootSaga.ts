import { takeLatest } from "redux-saga/effects";
import {
  handleAdminLogin,
  handleDeleteORder,
  handleDeleteUser,
  handleGetOrders,
} from "./handlers/admin";
import { handlePosts } from "./handlers/posts";
import {
  handleAddProductToBasket,
  handleGetProduct,
  handlePostComment,
} from "./handlers/product";
import {
  handleChangeOrderQuantity,
  handleDeleteOrderProduct,
  handleGetProducts,
} from "./handlers/products";
import { handleSideBar } from "./handlers/sideBar";
import { handleUserLogin } from "./handlers/userLogin";
import {
  adminDeleteOrderStart,
  adminDeleteUserStart,
  adminGetOrdersStart,
  adminLoginStart,
} from "./Slices/adminSlice";
import { getPostsStart, getPostStart } from "./Slices/postSlice";
import { getProductStart, postComment } from "./Slices/productSlice";
import { getProductsStart } from "./Slices/productsSlice";
import { getSideBarLengthStart } from "./Slices/sideBarSlice";
import {
  addProductToBasketStart,
  addProductToFavouriteStart,
  changeOrderQuantity,
  deleteOrderProduct,
  userLoginStart,
} from "./Slices/userSlice";
import { handlePost } from "./handlers/post";
import { getUsersStart } from "./Slices/usersSlice";
import { handleAddProductToFavourite, handleUsers } from "./handlers/users";

export function* watcherSaga() {
  yield takeLatest(getProductsStart, handleGetProducts);
  yield takeLatest(getProductStart, handleGetProduct);
  yield takeLatest(adminLoginStart, handleAdminLogin);
  yield takeLatest(userLoginStart, handleUserLogin);
  yield takeLatest(getSideBarLengthStart, handleSideBar);
  yield takeLatest(getPostsStart, handlePosts);
  yield takeLatest(getPostStart, handlePost);
  yield takeLatest(getUsersStart, handleUsers);
  yield takeLatest(changeOrderQuantity, handleChangeOrderQuantity);
  yield takeLatest(deleteOrderProduct, handleDeleteOrderProduct);
  yield takeLatest(postComment, handlePostComment);
  yield takeLatest(addProductToBasketStart, handleAddProductToBasket);

  yield takeLatest(addProductToFavouriteStart, handleAddProductToFavourite);

  yield takeLatest(adminGetOrdersStart, handleGetOrders);
  yield takeLatest(adminDeleteUserStart, handleDeleteUser);
  yield takeLatest(adminDeleteOrderStart, handleDeleteORder);
}
