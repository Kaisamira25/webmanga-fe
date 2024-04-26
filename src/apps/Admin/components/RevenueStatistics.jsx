import { useEffect, useState } from "react";
import RevenueStyle from "../scss/Revenue.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createCover, fetchCover } from "../../../services/Service";
function OrdersManager() {
 
  return (
    <div className={RevenueStyle.revenueWrapper}>
      <div className={RevenueStyle.revenueContainer}>
        <h4>Manager revenue</h4>
        <form>
          {/* Copy cai cu vo cho nay  */}
        </form>
      </div>
    </div>
  );
}

export default OrdersManager;
