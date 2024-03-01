import style from "./scss/BtnHeader.module.scss";
function BtnHeader({ btnIcon }) {
  return (
    <div className={style.buttonWrapper}>
      <button className={style.fakeBtn}></button>
      <button className={style.btnHeader}>{btnIcon}</button>
    </div>
  );
}

export default BtnHeader;
