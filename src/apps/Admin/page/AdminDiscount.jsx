import React from "react";
import InputAdmin from "../componnents/InputAdmin";
import BtnAdmin from "../componnents/BtnAdmin";
import TableAdmin from "../componnents/TableAdmin";
import Padgina from "../componnents/Padgination";
import SearchBar from "../componnents/SearchBar";
import TextArea from "../componnents/TextArea";


function AdminDiscount() {
    const cover = [
        { type: "text", names: "discount_name", id: "discount_name", placeholder: "Tên mã giảm giá" },
        { type: "number", names: "percent", id: "percent", placeholder: "Phần trăm đơn hàng" },
        { type: "text", names: "discout", id: "discount", placeholder: "Mã giảm giá" },
        { type: "number", names: "stock", id: "stock", placeholder: "Số lượng" },
    ]
    const TH = [{ names: "Id" },
    { names: "Tên mã giảm giá" },
    { names: "Phần trăm giảm" },
    { names: "Trạng thái" },
    { names: "Mã giảm giá" },
    { names: "Ngày tạo" },
    { names: "Ngày cập nhật" },
    { names: "Số lượng" }
    ]
    const TD = [{ id: 1, name: "Tên mã 1", percent: 0.05, active: true, code: "123ADACXAI", create: "12/12/2023", update: "1/2/2024", stock: 100 },
    { id: 2, name: "Tên mã 2", percent: 0.05, active: false, code: "123ADACXAI", create: "12/12/2023", update: "1/2/2024", stock: 100 },
    { id: 3, name: "Tên mã 3", percent: 0.08, active: true, code: "123ASACXAI", create: "12/12/2023", update: "1/2/2024", stock: 100 },
    { id: 4, name: "Tên mã 4", percent: 0.06, active: true, code: "123AVACXAI", create: "12/12/2023", update: "1/2/2024", stock: 100 }
    ]
    const modifiedTD = TD.map(item => ({
        ...item,
        active: item.active ? "Hoạt động" : "Không hoạt động"
    }));
    const buttons = [{ action: "/api/v1/cover", method: "POST", names: "Thêm" },
    { action: "api/v1/cover/{id}", method: "PUT", names: "Cập nhật" },
    { action: "api/v1/cover/{id}", method: "DELETE", names: "Xoá" }
    ]
    return (
        <div className="h-screen pt-12">
            <header className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Quản lý mã giảm giá</h3>
                </div>
            </header>
            <div className="h-8/12">
                <div className="py-4 h-auto">
                    {cover.map((field, index) => (
                        <InputAdmin
                            type={field.type}
                            name={field.names}
                            id={field.id}
                            placeholder={field.placeholder}
                        />
                    ))}
                    <TextArea id={"description"} name={"description"} />
                </div>
                {buttons.map((button, index) => (
                    <BtnAdmin method={button.method} names={button.names} />
                ))}
                <SearchBar />
                <TableAdmin arraysTH={TH} arraysTD={modifiedTD} />

            </div>

        </div>
    )
}
export default AdminDiscount