import React from "react";
import style from "./TextInfo.module.scss";

export default function TextInfo({ title, text, className }) {
  const inputClassName = `${style.container} ${className}`;

  return (
    <div className={inputClassName}>
      <div className={style.title}>{title}</div>
      <div className={style.text}>{text}</div>
    </div>
  );
}
