import React, { useState } from "react";
import ProductList from "./ProductList";
import PriceTotal from "./PriceTotal";
import style from "./ProductInput.module.scss";

function ProductRe() {
  return (
    <div className={style.container}>
      <div className="border border-black rounded-md p-4">
        <table className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* title left */}
          <div className={style.titleleft}>
            <div className="flex justify-between border-b-2 border-black">
              <p className={style.fonta}>Product</p>
              <p className={style.fontb}>Total</p>
            </div>

            <div className={style.table}>
              <ProductList />
            </div>
          </div>

          {/* title right */}
          <div className={style.titleright}>
            <div className=" border-b-2 border-black">
              <h2 className={style.fontc} >
                Cart Total
              </h2>
            </div>

            <PriceTotal />
          </div>
        </table>
      </div>
    </div>
  );
}

export default ProductRe;
