import React from "react";
import BookIcon from "../../../assets/icons/Book"
import AdminIcon from "../../../assets/icons/Admin";
import StatisIcon from "../../../assets/icons/Statis";
import { Link} from "react-router-dom";


function SideBar() {
    const UlField = [
        {
            name: "Product", svg: <BookIcon />,
            LiField: [
                { name: "Manage Genre",link:"/Admin/Genre"},
                { name: "Manage Cover",link:"/Admin/Cover"},
                { name: "Manage Gift",link:"/Admin/Gift" },
                { name: "Manage Book" ,link:"/Admin/Product"},
                { name: "Manage Type Book" ,link:"/Admin/Type"},
                { name: "Manage Discount" ,link:"/Admin/Discount"},
            ]
        },
        {
            name: "Account", svg: <AdminIcon />,
            LiField: [
                { name: "Manage Account" ,link:"/Admin/Account"},
            ]
        },
        {
            name: "Statis", svg: <StatisIcon />,
            LiField: [
                { name: "Invoice Statistics" ,link:"/Admin/Order"},
                { name: "Revenue Statistics" ,link:"/Admin/Sales"}
            ]
        },
    ];
    return (
        <div className="pt-lg-3 mb-1 py-2">
            {UlField.map((field, index) => (
                <div className="rounded-e rounded-s mb-1 h-auto py-1" key={index}>
                    <ul className="nav ms-1 pb-2 pt-1">
                        <h6 className="sidebar-heading mt-1 mb-1 ms-1 font-bold">
                            <span className="ms-6">{field.svg} {field.name}</span>
                        </h6>
                        {field.LiField.map((liFields, index) => (
                            <div className="text-start ps-8 py-1 hover:text-blue-400">
                                <Link to={liFields.link} key={index}><span>{liFields.name}</span></Link> 
                            </div>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );


}
export default SideBar