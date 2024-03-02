import React from "react";
import BookIcon from "../../../assets/icons/Book"
import AdminIcon from "../../../assets/icons/Admin";
import StatisIcon from "../../../assets/icons/Statis";
import Li from "./SideBar-Li";
import { Routes,Route } from "react-router-dom";


function SideBar() {
    const UlField = [
        {
            name: "Sản Phẩm", svg: <BookIcon />,
            LiField: [
                { name: "Quản lý thể loại",link:"/AdminGenre"},
                { name: "Quản lý loại bìa",link:"/AdminCover"},
                { name: "Quản lý quà tặng",link:"/AdminGift" },
                { name: "Quản lý sản phẩm" ,link:"/AdminProduct"},
                { name: "Quản lý bản sản phẩm" ,link:"/AdminType"},
                { name: "Quản lý mã giảm giá" ,link:"/AdminDiscount"},
            ]
        },
        {
            name: "Nội bộ", svg: <AdminIcon />,
            LiField: [
                { name: "Quản lý tài khoản" ,link:"/AdminAccount"},
            ]
        },
        {
            name: "Thống kê-Báo cáo", svg: <StatisIcon />,
            LiField: [
                { name: "Quản lý hoá đơn" ,link:"/AdminOder"},
                { name: "Sản phẩm tồn kho" ,link:"/AdminStock"},
                { name: "Thống kê doanh thu" ,link:"/AdminStatis"}
            ]
        },
    ];
    return (
        <div className="body pt-lg-3 mb-1 py-2">
            {UlField.map((field, index) => (
                <div className="rounded-e rounded-s mb-1 h-auto py-1">
                    <ul className="nav ms-1 pb-2 pt-1">
                        <h6 className="sidebar-heading mt-1 mb-1 ms-1 font-bold">
                            <span className="ms-6">{field.svg} {field.name}</span>
                        </h6>
                        {field.LiField.map((liFields, index) => (
                            Li(liFields.link,liFields.name)
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );


}
export default SideBar