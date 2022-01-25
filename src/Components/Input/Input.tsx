import React, { LegacyRef } from "react";
import inputStyle from "./Input.module.scss";

type InputProps = {
  name: string;
  inputName: string;
  register: any;
  errorMessage?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "checkbox"
    | "number"
    | "textarea"
    | "file";
  onChange?: Function;
  value?: any;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
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
        <input
          className={`${inputStyle.Input} ${
            errorMessage ? inputStyle.Input_error : ""
          } default-input`}
          type={type}
          {...register(inputName)}
          placeholder={placeholder}
          key={name}
        />
        <div style={{ position: "absolute" }}>
          {errorMessage && errorMessage}
        </div>
      </div>
    </div>
  );
};

export default Input;
