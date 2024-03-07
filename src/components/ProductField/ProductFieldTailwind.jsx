import React from "react";

function ProductField({ name, price, quantity }) {
  return (
    <div className="flex items-center justify-between my-2">
      <p className="font-bold">
        {name} {quantity}
      </p>
      <p>{price} VNĐ</p>
    </div>
  );
}

export default ProductField;
