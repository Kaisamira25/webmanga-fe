import FormInputStyle from "../scss/FormInput.module.scss";
function FormInput({ placeholder, type }) {
  return (
    <input
      className={FormInputStyle.input}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
