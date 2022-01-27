import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useState } from "react";
import { postComment as postCommentSlice } from "../../../store/Slices/productSlice";
import { useHistory } from "react-router-dom";

function CommentsController() {
  const user = useSelector((state: RootState) => state.user.user);
  const product = useSelector((state: RootState) => state.product.product);

  const rout = useHistory();
  if (!product) rout.push("/products");

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleCommentText = (value: string) => {
    setComment(value);
  };
  const postComment = (comment: string) => {
    if (product)
      dispatch(
        postCommentSlice({
          url: `/user/comment/${product.id}`,
          method: "POST",
          data: { content: comment },
        })
      );
  };

  return {
    states: { user, comment, product },
    actions: { handleCommentText, postComment },
  };
}

export default CommentsController;
