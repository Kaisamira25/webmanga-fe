import React from "react";
import style from "./SelectField.module.scss";

function SelectField({ label, options, placeholder }) {
  return (
    <div className={style.wrapper}>
      <label>{label}</label>
      <select className={style.input}>
        <option disabled selected hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
