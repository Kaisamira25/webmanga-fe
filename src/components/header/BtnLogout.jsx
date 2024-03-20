import style from "./scss/BtnLogout.module.scss";
function BtnLogout({icon}) {
    return ( 
        <div className={style.btnLogoutWrapper}>
            <button>{icon}</button>
        </div>
     );
}

export default BtnLogout;