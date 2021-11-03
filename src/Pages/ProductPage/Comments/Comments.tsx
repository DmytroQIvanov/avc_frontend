import React, { useState } from "react";
import { postComment } from "../../../store/Slices/productSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { IProduct } from "../../../Interfaces/IProduct";

const Comments = (props: { product: IProduct }) => {
  const { product } = props;
  const user = useSelector((state: RootState) => state.user.user);

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div className={"product-page__comment-input-container"}>
        {user ? (
          <div className={"product-page__comment-input"}>
            <textarea
              className={"default-input"}
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
            <button
              className={"grey-button"}
              onClick={() => {
                dispatch(
                  postComment({
                    url: `/user/comment/${product.id}`,
                    method: "POST",
                    data: { content: comment },
                  })
                );
              }}
            >
              Отправить
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", position: "relative" }}>
            Что-бы писать комментарии <Link to={"/login"}> войдите</Link>
          </div>
        )}
      </div>
      <div className={"product-page__comments-container"}>
        {!product?.comments ? (
          <h2>Будь першим, хто залишить коментар</h2>
        ) : (
          <div>
            {product.comments.map((comment, index) => (
              <div>
                <div className={"comment__full-name"}>
                  {comment.user.firstName} {comment.user.lastName}
                </div>
                <div>{comment.content}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
