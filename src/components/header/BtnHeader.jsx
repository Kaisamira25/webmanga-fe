import { useState } from "react";
import IconMenuUncheck from "../../assets/icons/MenuUncheck";
import IconMenu from "../../assets/icons/Menu";
import IconHome from "../../assets/icons/HomeIcon";
import IconLogOut from "../../assets/icons/LogOut";
import IconCart from "../../assets/icons/CartIcon";
import IconUser from "../../assets/icons/AccountIcon";
import style from "./scss/BtnHeader.module.scss";
function BtnHeader() {
  // const [check, setCheck] = useState(false);
  // const rotate = () => {
  //   setCheck(!check);
  //   console.log(check);
  // };
  return (
    // <div className={style.buttonWrapper}>
    //   <button className={style.fakeBtn}></button>
    //   <button className={style.btnHeader}>{btnIcon}</button>
    // </div>


    // <div className={style.container}>
    //   <button
    //     className={`btnHeader ${check ? `${style.rotate}` : ""}`}
    //     onClick={rotate}
    //   >
    //     {/* {check ? btnIcon : <IconMenuUncheck />} */}
    //     <IconMenu />
    //   </button>
    //   <div className={`${check ? `${style.rotateMoreBtn}` : ""}`}>
    //     <div>
    //       <button>
    //         <IconHome />
    //       </button>
    //     </div>
    //     <div>
    //       <button>
    //         <IconCart />
    //       </button>
    //     </div>
    //     <div>
    //       <button>
    //         <IconUser />
    //       </button>
    //     </div>
    //     <div>
    //       <button>
    //         <IconLogOut />
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div>
      {/* // dont use   */}
    </div>
  );
}

export default BtnHeader;
