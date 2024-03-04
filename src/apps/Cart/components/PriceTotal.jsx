import React from "react";
import ProductField from "../../../components/ProductField/ProductFieldTailwin";

import TotalPayment from "../../Payment/components/TotalPayment/TotalPayment";
function PriceTotal() {
    const productField = [
        {


            name: "The Eminence In Shadow",
            quatily: "số lượng: 1",
            price: "100.000",
        },
        {

            name: "86 eighty six",
            quatily: "số lượng: 1",
            price: "80.000",
        },

    ];

    const textInfo = [
        { title: "Tống tiền giỏ hàng ", text: "180000 VND" },
        { title: " Phí Ship ", text: "10000 VND" },

        { title: "Mã giảm giá ", text: "-20000 VND" },

        { title: "Tổng hóa đơn", text: "170000 VNĐ" },
    ];

    return (
        <div >
            <div className=" product  border-b-2 border-black " >
                {productField.map((product, index) => (
                    <ProductField
                        key={index}
                        name={product.name}
                        quatily={product.quatily}
                        price={product.price}
                    />
                ))}
            </div>
            <div className="Total" >
                <TotalPayment textInfo={textInfo} />
            </div>
        </div>
    );
}

export default PriceTotal;
