import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommentsController from "./Comments.controller";
import CommentInput from "./CommentInput/CommentInput";

const Comments = () => {
  const {
    states: { comment, user, product },
    actions: { handleCommentText, postComment },
  } = CommentsController();

  return (
    <div>
      <div className={"product-page__comment-input-container"}>
        {user ? (
          <div className={"product-page__comment-input"}>
            <CommentInput onClick={postComment} />
          </div>
        ) : (
          <div style={{ display: "flex", position: "relative" }}>
            Что-бы писать комментарии <Link to={"/login"}> войдите</Link>
          </div>
        )}
      </div>
      <div className={"product-page__comments-container"}>
        {product?.comments.length == 0 ? (
          <h2>Будь першим, хто залишить коментар</h2>
        ) : (
          <div>
            {product?.comments.map((comment, index) => (
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
