import style from "./scss/BtnAuth.module.scss";
function BtnAuth() {
    return ( 
        <div className={style.btnAuthWrapper}>
            <button>
                <p>
                    Log in
                </p>
            </button>
        </div>
     );
}

export default BtnAuth;