import React from "react";
import style from "./TextInfo.module.scss";

export default function TextInfo({ title, text }) {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.text}>{text}</div>
    </div>
  );
}
