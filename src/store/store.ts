import adminReducer from "./Slices/adminSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsReducer from "./Slices/productsSlice";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./rootSaga";
import productReducer from "./Slices/productSlice";
import userSlice from "./Slices/userSlice";
import sideBarSlice from "./Slices/sideBarSlice";
import PostsSlice from "./Slices/postSlice";
import UsersSlice from "./Slices/usersSlice";
import ModalSlice from "./Slices/modalSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    products: productsReducer,
    product: productReducer,
    user: userSlice,
    users: UsersSlice,
    sidebar: sideBarSlice,
    posts: PostsSlice,
    modal: ModalSlice,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
