import * as React from "react";
import InputAdmin from "../componnents/InputAdmin";
import BtnAdmin from "../componnents/BtnAdmin";
import TableAdmin from "../componnents/TableAdmin";
import Padgina from "../componnents/Padgination";
import SearchBar from "../componnents/SearchBar";

function AdminCover() {
    const cover = [{ type: "text", names: "cover", id: "cover", placeholder: "Tên loại bìa" }]
    const TH = [{ names: "Id" },
    { names: "Tên bìa" }
    ]
    const TD = [{ id: 1, name: "Loại bìa 1" },
    { id: 2, name: "Loại bìa 2" },
    { id: 3, name: "Loại bìa 3" },
    { id: 4, name: "Loại bìa 4" },
    { id: 5, name: "Loại bìa 5" },
    { id: 6, name: "Loại bìa 6" },
    { id: 7, name: "Loại bìa 7" },
    ]
    const buttons = [{ action: "/api/v1/cover", method: "POST", names: "Thêm" },
    { action: "api/v1/cover/{id}", method: "PUT", names: "Cập nhật" },
    { action: "api/v1/cover/{id}", method: "DELETE", names: "Xoá" }
    ]
    return (
        <div className="h-screen pt-12">
            <header className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Quản lý loại bìa</h3>
                </div>
            </header>
            <div>
                <div>
                    {cover.map((field) => (
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
export default AdminCover