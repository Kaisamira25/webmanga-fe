import React from "react";
import style from "./SelectField.module.scss";

function SelectField({ label, options, placeholder, value, onChange }) {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };
  return (
    <div className={style.wrapper}>
      <label>{label}</label>
      <select
        className={style.input}
        value={value}
        onChange={handleSelectChange}
      >
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
