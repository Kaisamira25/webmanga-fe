import React from "react";
import InputField from "../../../../components/InputField/InputField";

function MapField({ inputField, className }) {
  return (
    <div className={className}>
      {inputField.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          option={field.option}
        />
      ))}
    </div>
  );
}

export default MapField;
