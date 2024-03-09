import * as React from "react";
import InputAdmin from "../componnents/InputAdmin";
import BtnAdmin from "../componnents/BtnAdmin";
import TableAdmin from "../componnents/TableAdmin";
import Padgina from "../componnents/Padgination";
import SearchBar from "../componnents/SearchBar";

function AdminGift() {
    const gift = [
        { type: "text", names: "gift", id: "gift", placeholder: "Tên quà tặng" },
        { type: "text", names: "gift", id: "gift", placeholder: "Loại quà tặng" }
    ]
    const TH = [
        { names: "Id" },
        { names: "Tên quà tặng" },
        { names: "Loại quà tặng" }
    ]
    const TD = [
        { id: 1, name: "Quà 1", cate: "Loại quà 1" },
        { id: 2, name: "Quà 2", cate: "Loại quà 2" },
        { id: 3, name: "Quà 3", cate: "Loại quà 3" },
        { id: 4, name: "Quà 4", cate: "Loại quà 4" },
        { id: 5, name: "Quà 5", cate: "Loại quà 5" },
        { id: 6, name: "Quà 6", cate: "Loại quà 6" },
        { id: 7, name: "Quà 7", cate: "Loại quà 7" },
    ]
    const arraysTD = TD.map(({ id, name, cate }) => ({ id, name, cate }));
    const buttons = [
        { action: "/api/v1/gift", method: "POST", names: "Thêm" },
        { action: "api/v1/gift/{id}", method: "PUT", names: "Cập nhật" },
        { action: "api/v1/gift/{id}", method: "DELETE", names: "Xoá" }
    ];
    return (
        <div className="h-screen pt-12">
            <header className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Quản lý quà tặng</h3>
                </div>
            </header>
            <div>
                <div>
                    {gift.map((field) => (
                        <InputAdmin
                            type={field.type}
                            name={field.names}
                            id={field.id}
                            placeholder={field.placeholder}
                        />
                    ))}
                </div>
                {buttons.map((button, index) => (
                    <BtnAdmin key={index} method={button.method} names={button.names} />
                ))}
                <SearchBar />
                <TableAdmin arraysTH={TH} arraysTD={arraysTD} />
            </div>
        </div>
    )
}
export default AdminGift;