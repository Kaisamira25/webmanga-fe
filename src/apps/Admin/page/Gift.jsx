import React, { useState } from "react";
import InputAdmin from "../componnents/InputAdmin";
import BtnAdmin from "../componnents/BtnAdmin";
import TableAdmin from "../componnents/TableAdmin";
import GiftData from "../Services/GiftData";
import SearchBar from "../componnents/SearchBar";

function AdminGift() {
    const [GiftType, setGiftType] = useState('');
    const [GiftName, setGiftName] = useState('');
    const { Gifts, addGifts, updateGifts, deleteGifts } = GiftData();

    const handleGiftNameChange = (e) => {
        setGiftName(e.target.value);
    };

    const handleGiftTypeChange = (e) => {
        setGiftType(e.target.value);
    };
    const handleAddGift = async () => {
        if (GiftType.trim() !== '' && GiftName.trim() !== '') {
            await addGifts({ GiftName, GiftType });
            setGiftType('');
            setGiftName('');
        } else {
            console.error('Gift type and name must not be empty');
        }
    };
    const handleUpdateGift = async () => {
        // Khai báo GiftId ở đây hoặc đảm bảo nó đã được khai báo trước khi sử dụng
        await updateGifts(GiftId, { GiftType });
        setGiftType('');
        // setGenre(''); // Nếu biến genre không được khai báo ở đây, bạn cần xác định nó trước khi sử dụng
    };
    const giftField = [
        { type: "text", names: "giftName", id: "giftName", placeholder: "Tên quà tặng", value: GiftName, onChange: handleGiftNameChange },
        { type: "text", names: "giftType", id: "giftType", placeholder: "Loại quà tặng", value: GiftType, onChange: handleGiftTypeChange }
    ];
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
    const buttons = [
        { names: 'Add', onclick: handleAddGift },
        { names: 'Update', onclick: handleUpdateGift }
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
                    {giftField.map((field, index) => (
                        <InputAdmin
                            key={index}
                            type={field.type}
                            name={field.names}
                            id={field.id}
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={field.placeholder}
                        />
                    ))}
                </div>
                {buttons.map((button, index) => (
                    <BtnAdmin key={index} names={button.names} onclicks={button.onclick} />
                ))}
                <SearchBar />
                <TableAdmin arraysTH={TH} arraysTD={Gifts} />
            </div>
        </div>
    )
}
export default AdminGift;