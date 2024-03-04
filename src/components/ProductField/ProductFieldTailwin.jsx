import React from "react";

function ProductField({ name, price, quatily }) {
    return (
        <div  className="flex items-center gap-2">
            <p className="font-bold">{name}</p>
            <p> {quatily}</p>
            <p>{price} VNĐ</p>
        </div>
    );
}

export default ProductField;
