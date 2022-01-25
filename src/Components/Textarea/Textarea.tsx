import React, { LegacyRef } from "react";
import textareaStyle from "./Textarea.module.scss";

type InputProps = {
  name: string;
  inputName: string;
  register: any;
  errorMessage?: string;
  type?: "text" | "password" | "email" | "checkbox" | "number" | "textarea";
  onChange?: Function;
  value?: any;
  placeholder?: string;
};

const Textarea: React.FC<InputProps> = ({
  name,
  inputName,
  errorMessage,
  register,
  type,
  placeholder,
}) => {
  return (
    <div>
      <div>{name}</div>
      <div>
        <textarea
          className={`${textareaStyle.Textarea} ${
            errorMessage ? textareaStyle.Textarea_error : ""
          } default-input`}
          type={type}
          {...register(inputName)}
          placeholder={placeholder}
          key={name}
        />
        <div>{errorMessage && errorMessage}</div>
      </div>
    </div>
  );
};

export default Textarea;
