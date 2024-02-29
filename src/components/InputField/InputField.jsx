import React from "react";
import style from "./InputField.module.scss";

function InputField({ label, type, placeholder }) {
  return (
    <div className={style.wrapper}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} className={style.input} />
    </div>
  );
}

export default InputField;
