import { IProduct } from "../../Interfaces/IProduct";
import { createSlice } from "@reduxjs/toolkit";

export interface PostsState {
  posts: { name: string; content: string; id: string }[];
  post: { name: string; content: string; id: string } | null;
  loading: boolean;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  post: null,
};

export const PostsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    getPostsStart(state, id) {
      state.loading = true;
    },

    getPostsSuccess(state, action) {
      console.log(action.payload);
      state.posts = action.payload;
      state.loading = false;
    },
    getPostsError(state, action) {
      state.loading = false;
    },

    getPostStart(state, id) {
      state.loading = true;
    },

    getPostSuccess(state, action) {
      console.log(action.payload);
      state.post = action.payload;
      state.loading = false;
    },
    getPostError(state, action) {
      state.loading = false;
    },
    // getPostStart(state, id) {
    //   state.loading = true;
    // },
  },
});

export const {
  getPostsStart,
  getPostsSuccess,
  getPostsError,
  getPostStart,
  getPostSuccess,
  getPostError,
} = PostsSlice.actions;

export default PostsSlice.reducer;
