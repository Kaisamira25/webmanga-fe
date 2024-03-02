import React from "react";
import style from "./InputField.module.scss";

function InputField({ label, type, placeholder, className }) {
  const inputClassName = `${style.input} ${className}`;
  return (
    <div className={style.wrapper}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} className={inputClassName} />
    </div>
  );
}

export default InputField;
