import { useEffect, useState } from "react";
import style from "./scss/BtnCart.module.scss";
import IconCart from "../../assets/icons/CartIcon";

function BtnCart({ onOpen, icon }) {
  // const [check, setCheck] = useState(false);
  // const rotate = () => {
  //   setCheck(!check);
  //   console.log(check);
  // };
  const handleOpen = () => {
    if (onOpen) {
      onOpen();
    }
  };
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
    <div className={`${style.btnCartWrapper}`}>
      <button onClick={handleOpen}>
        <IconCart />
      </button>
      <p className={`data ${style.visible}`}>1</p>
    </div>
  );
}

export default BtnCart;
