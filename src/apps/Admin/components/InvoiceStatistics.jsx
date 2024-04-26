import { useEffect, useState } from "react";
import InvoiceStyle from "../scss/Invoice.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createCover, fetchCover } from "../../../services/Service";
function OrdersManager() {
 
  return (
    <div className={InvoiceStyle.invoiceWrapper}>
      <div className={InvoiceStyle.invoiceContainer}>
        <h4>Manager invoice</h4>
        <form>
          {/* Copy cai cu vo cho nay  */}
        </form>
      </div>
    </div>
  );
}

export default OrdersManager;
