import FormInputStyle from "../scss/FormInput.module.scss";
function FormInput({ placeholder, type, handleFunction }) {
  return (
    <input
      onChange={(e) => handleFunction(e)}
      className={FormInputStyle.input}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
