import React from "react";
import style from "./InputField.module.scss";

function InputField({ label, type, placeholder, className, onChange, value }) {
  const inputClassName = `${style.input} ${className}`;

  return (
    <div className={style.wrapper}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={inputClassName}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
RegExp