import style from "./scss/BtnUser.module.scss";
function BtnUser({ icon, logoutIcon }) {
  return (
    <div className={`${style.btnUserWrapper}`}>
      <button>{icon}</button>
    </div>
  );
}

export default BtnUser;
