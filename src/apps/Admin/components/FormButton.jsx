import FormButtonStyle from "../scss/FormButton.module.scss";
function FormButton({ content, handleFunction }) {
  return (
      <button onClick={() => handleFunction()} className={FormButtonStyle.button}>{content}</button>
  );
}

export default FormButton;
