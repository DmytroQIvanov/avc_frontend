import React, { useState } from "react";

type CommentInputProps = {
  onClick?: Function;
};

const CommentInput: React.FC<CommentInputProps> = ({ onClick }) => {
  const [state, setState] = useState("");
  const handleCommentChange = (text: string) => {
    setState(text);
  };
  return (
    <div>
      <textarea
        className={"default-input"}
        value={state}
        onChange={(event) => {
          handleCommentChange(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onClick && onClick(state);
          }
        }}
      />
      <button
        className={"grey-button"}
        onClick={() => {
          onClick && onClick(state);

          setState("");
        }}
      >
        Отправить
      </button>
    </div>
  );
};

export default CommentInput;
