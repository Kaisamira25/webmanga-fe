import FormInputStyle from "../scss/FormInput.module.scss";
function FormInput({ label, placeholder, type, handleFunction }) {
  return (
    <div className={FormInputStyle.formInputWrapper}>
      <label htmlFor="">{label}</label>
      <input
        onChange={(e) => handleFunction(e)}
        className={FormInputStyle.input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;
