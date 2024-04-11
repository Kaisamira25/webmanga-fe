import React, { useState } from "react";
import Padgina from "../componnents/Padgination";
import SearchBar from "../componnents/SearchBar";
import CoverData from "../Services/CoverData";
import CloseBtn from "../../../assets/icons/CloseBtn";
import OrderData from "../Services/OrderData";
import moment from "moment/moment";

function Invoice() {
    const { orders, fetchOrder } = OrderData();
    const OderTH = [
        { names: "Customer" },
        { names: "Phone Number" },
        { names: "Address" },
        { names: "Total" },
        { names: "Order Status" },
        { names: "Payment Status" },
        { names: "Order Day" },

    ]
    const ItemTH = [
        { names: "Order Id" },
        { names: "Publication" },
        { names: "Quantity" }
    ]


    return (
        <div className="h-screen pt-12">
            <div className="mt-4 mb-20">
                <div className="text-black text-start">
                    <h3 className="font-bold">Manage Invoice</h3>
                </div>
            </div>
            <div className="h-96 border-2 border-black overflow-auto">
                <div className="text-center bg-slate-500 font-bold">
                    <span>Invoice</span>
                </div>
                <table className="w-full h-full">
                    <thead className="border-b border-black bg-slate-400  ">
                        <tr>
                            {OderTH.map((item, index) => (
                                <th className=" text-center font-normal border-r border-black" key={index}>{item.names}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item, rowIndex) => (
                            <tr key={rowIndex} name={rowIndex} className="cursor-pointer border-b  border-black hover:bg-gray-400">
                                <td className="text-center border-r border-black" >{item.fullname}</td>
                                <td className="text-center border-r border-black" >{item.phoneNumber}</td>
                                <td className="text-center border-r border-black" >{item.address}</td>
                                <td className="text-center border-r border-black" >{item.totalPrice}</td>
                                <td className="text-center border-r border-black" >{item.orderStatus}</td>
                                <td className="text-center border-r border-black" >{item.paymentStatus ? 'Paid' : 'Unpaid'}</td>
                                <td className="text-center border-r border-black" >{moment(item.orderDay).format('DD-MM-YYYY HH:mm:ss')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Invoice