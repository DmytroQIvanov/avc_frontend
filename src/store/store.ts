import adminReducer from "./Slices/adminSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsReducer from "./Slices/productsSlice";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./rootSaga";
import productReducer from "./Slices/productSlice";
import userSlice from "./Slices/userSlice";
import sideBarSlice from "./Slices/sideBarSlice";
import PostsSlice from "./Slices/postSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    products: productsReducer,
    product: productReducer,
    user: userSlice,
    sidebar: sideBarSlice,
    posts: PostsSlice,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
