import React, { useState } from "react";
import ProductList from "./ProductList";
import PriceTotal from "./PriceTotal";

function ProductRe() {
  return (
    <div className="container mx-auto p-4 ">
      <div className="border border-black rounded-md p-4">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* title left */}
          <div className="col-span-2 mx-6">
            <div className="flex justify-between border-b-2 border-black">
              <p className="text-xl font-semibold pl-5">Product</p>
              <p className="text-xl font-semibold pr-5">Total</p>
            </div>

            <div className="product">
              <div>
                <ProductList />
              </div>
            </div>
          </div>

          {/* title right */}
          <div className="col-span-1 mx-6">
            <h2 className="text-xl text-center font-semibold border-b-2 border-black ">
              Cart Total
            </h2>
            <PriceTotal />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductRe;
