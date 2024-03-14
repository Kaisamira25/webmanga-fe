import React, { useState } from "react";
import Padgina from "../componnents/Padgination";
import SearchBar from "../componnents/SearchBar";
import CoverData from "../Services/CoverData";
import CloseBtn from "../../../assets/icons/CloseBtn";

function AdminCover() {
    const OderTH = [
        { names: "Id Order" },
        { names: "User" },
        { names: "Guest" },
        { names: "Total" },
        { names: "Order Day" },
        { names: "Order Status" },
        { names: "Discount" }
    ]
    const OderTD = [
        { id: "1", user: "Lân", guest: "", total: 10000001, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "2", user: "", guest: "Lân1", total: 10000002, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "3", user: "", guest: "Lân2", total: 10000003, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
        { id: "4", user: "Lân3", guest: "", total: 10000004, day: "20/03/2003", status: "Đang vận chuyển", discount: "Không có" },
    ]
    const ItemTH = [
        { names: "Order Id" },
        { names: "Publication" },
        { names: "Quantity" }
    ]
    const ItemTD = [
        { id: 1, book: "Gintama", quantity: 5 },
        { id: 3, book: "Gintama", quantity: 5 },
        { id: 4, book: "Gintama", quantity: 5 },
        { id: 1, book: "Gintama", quantity: 5 },
        { id: 3, book: "Gintama", quantity: 5 },
        { id: 4, book: "Gintama", quantity: 5 },
        { id: 1, book: "Gintama", quantity: 5 },
        { id: 3, book: "Gintama", quantity: 5 },
        { id: 4, book: "Gintama", quantity: 5 },
        { id: 1, book: "Gintama", quantity: 5 },
        { id: 3, book: "Gintama", quantity: 5 },
        { id: 4, book: "Gintama", quantity: 5 },
        { id: 1, book: "Gintama", quantity: 5 },
        { id: 3, book: "Gintama", quantity: 5 },
        { id: 4, book: "Gintama", quantity: 5 },
        { id: 1, book: "Gintama", quantity: 5 },
        { id: 3, book: "Gintama", quantity: 5 },
        { id: 4, book: "Gintama", quantity: 5 },
        { id: 1, book: "Gintama", quantity: 5 },
        { id: 3, book: "Gintama", quantity: 5 },
        { id: 4, book: "Gintama", quantity: 5 },
    ]

    return (
        <div className="h-screen pt-12">
            <header className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Invoice</h3>
                </div>
            </header>
            <div className="w-12/12 h-10 flex py-5">
                <div className="w-8/12 me-24 h-96 border-2 border-black rounded-lg overflow-y-scroll">
                    <div className="text-center bg-slate-500 font-bold">
                        <span>Invoice</span>
                    </div>
                    <table className="w-full">
                        <thead className="border-b border-black bg-slate-400  ">
                            <tr>
                                {OderTH.map((item, index) => (
                                    <th className=" text-center font-normal border-r border-black" key={index}>{item.names}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {OderTD.map((items, rowIndex) => (
                                <tr key={rowIndex} name={rowIndex} className="cursor-pointer border-b  border-black hover:bg-gray-400">
                                    {Object.values(items).map((value, colIndex) => (
                                        <td className="text-center border-r border-black" key={colIndex}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-6/12 ms-12">
                    <div className="w-12/12 mb-2 h-96 border-2 rounded-lg border-black overflow-y-scroll">
                        <div className="text-center bg-slate-500 font-bold">
                            <span>Detail Invoice</span>
                        </div>
                        <table className="w-full h-80 border-s border-r border-black">
                            <thead className="border-b border-black  bg-slate-400  ">
                                <tr>
                                    {ItemTH.map((item, index) => (
                                        <th className=" text-center font-normal border-r border-black" key={index}>{item.names}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="overflow-y-scroll">
                                {ItemTD.map((items, rowIndex) => (
                                    <tr key={rowIndex} name={rowIndex} className="cursor-pointer border-b  border-black hover:bg-gray-400">
                                        {Object.values(items).map((value, colIndex) => (
                                            <td className="text-center border-r border-black" key={colIndex}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdminCover