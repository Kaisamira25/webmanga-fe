import { useEffect, useState } from "react";
import OrderStyle from "../scss/OrderManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createCover, fetchCover } from "../../../services/Service";
function OrdersManager() {
 
  return (
    <div className={OrderStyle.orderWrapper}>
      <div className={OrderStyle.orderContainer}>
        <h4>Manager customer</h4>
        <form>
          {/* Copy cai cu vo cho nay  */}
        </form>
      </div>
    </div>
  );
}

export default OrdersManager;
