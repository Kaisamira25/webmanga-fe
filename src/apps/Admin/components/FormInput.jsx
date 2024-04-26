import FormInputStyle from "../scss/FormInput.module.scss";
function FormInput({ label, placeholder, type, handleFunction, validate, disable }) {

  return (
    <div className={FormInputStyle.formInputWrapper}>
      <label htmlFor="">{label}</label>
      <input 
        onChange={(e) => handleFunction(e)}
        className={FormInputStyle.input}
        type={type}
        placeholder={placeholder}
        readOnly={disable}
      />
      <p>Note</p>
    </div>
  );
}

export default FormInput;
