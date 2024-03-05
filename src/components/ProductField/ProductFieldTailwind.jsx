import React from "react";

function ProductField({ name, price, quality }) {
  return (
    <div className="flex items-center justify-between my-2">
      <p className="font-bold">
        {name} {quality}
      </p>
      <p>{price} VNĐ</p>
    </div>
  );
}

export default ProductField;
