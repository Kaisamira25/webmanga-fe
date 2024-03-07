import * as React from "react";
import InputAdmin from "../componnents/InputAdmin";
import BtnAdmin from "../componnents/BtnAdmin";
import TableAdmin from "../componnents/TableAdmin";
import Padgina from "../componnents/Padgination";
import SearchBar from "../componnents/SearchBar";

function AdminGenre() {
    const product = [{ type: "text", names: "product", id: "product", placeholder: "Tên thể loại" }]
    const TH = [{ names: "Id" },
    { names: "Tên thể loại" }
    ]
    const TD = [{ id: 1, name: "Thể loại 1" },
    { id: 1, name: "Thể loại 1" },
    { id: 1, name: "Thể loại 1" }
    ]
    const buttons = [{ action: "/api/v1/publications", method: "POST", names: "Thêm" },
    { action: "api/v1/publications/{id}", method: "PUT", names: "Cập nhật" },
    { action: "api/v1/publications/{id}", method: "DELETE", names: "Xoá" }
    ]
    return (
        <div className="h-screen pt-12">
            <header className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Quản lý thể loại</h3>
                </div>
            </header>
            <div>
                <div>
                    {product.map((field) => (
                        <InputAdmin
                            type={field.type}
                            name={field.names}
                            id={field.id}
                            placeholder={field.placeholder}
                        />
                    ))}
                </div>
                {buttons.map((button) => (
                    <BtnAdmin method={button.method} names={button.names} />
                ))}
                <SearchBar />
                <TableAdmin arraysTH={TH} arraysTD={TD} />
            </div>

        </div>
    )
}
export default AdminGenre