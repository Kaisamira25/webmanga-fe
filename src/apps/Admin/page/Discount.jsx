import React from "react";
import InputAdmin from "../componnents/InputAdmin";
import BtnAdmin from "../componnents/BtnAdmin";
import TableAdmin from "../componnents/TableAdmin";
import Padgina from "../componnents/Padgination";
import SearchBar from "../componnents/SearchBar";
import TextArea from "../componnents/TextArea";
import { AlertAdmin } from "../componnents/Alert";
import DiscountData from "../Services/DiscountData";

function AdminDiscount() {
  // --------------------------------------------------------------------
  // const [discountName, setDiscountName] = useState("");
  // const {
  //   discounts,
  //   addDiscounts,
  //   updateDiscounts,
  //   deleteDiscounts,
  //   findDiscount,
  // } = DiscountData();
  // const [discountId, setDiscountId] = useState("");
  // const [vali, setVali] = useState("");
  // const [info, setInfo] = useState("");
  // const TH = [
  //   { names: "Id" },
  //   { names: "DiscountName" },
  //   { names: "Description" },
  //   { names: "DiscountPercent" },
  //   { names: "Active" },
  //   { names: "DiscountCode" },
  //   { names: "CreatedAt" },
  //   { names: "ExpirationDate" },
  //   { names: "" }
  // ];
  // const isDiscountExist = () => {
  //   return discounts.some(
  //     (item) => item.discountName.toLowerCase() === discountName.toLowerCase()
  //   );
  // };

  // const handleAddDiscount = async () => {
  //   if (discountName === null || discountName === "") {
  //     setVali("error");
  //     setInfo("Discount name is not empty!");
  //   } else if (isDiscountExist()) {
  //     setVali("error");
  //     setInfo("DiscountName is exist!");
  //   } else {
  //     try {
  //       await addDiscounts({ discountName });
  //       // Hiển thị alert khi thêm thể loại thành công
  //       setVali("success");
  //       setInfo("Adding complete");
  //       setDiscountName("");
  //     } catch (error) {
  //       // Xử lý khi có lỗi xảy ra trong quá trình thêm thể loại
  //       setVali("error");
  //       setInfo("Adding fail check field!");
  //     }
  //   }
  // };
  // const handleRowClick = (id) => {
  //   const selected = discounts.find((discount) => discount.id === id);
  //   console.log(id);
  //   if (selected) {
  //     setDiscountName(selected.discountName);
  //     setDiscountId(selected.id);
  //   }
  // };
  // const handleUpdateDiscount = async () => {
  //   if (discountName === null || discountName === "") {
  //     setVali("error");
  //     setInfo("Discount name is not empty!");
  //   } else if (isDiscountExist()) {
  //     setVali("error");
  //     setInfo("Discount name is exist!");
  //   } else {
  //     console.log(discountId, discountName);
  //     try {
  //       await updateDiscounts(discountId, { discountName });
  //       // Hiển thị alert khi thêm thể loại thành công
  //       setVali("success");
  //       setInfo("Update complete!");
  //       setDiscountName("");
  //     } catch (error) {
  //       // Xử lý khi có lỗi xảy ra trong quá trình thêm thể loại
  //       setVali("error");
  //       setInfo("Update fail!");
  //     }
  //   }
  // };
  // const handleDeleteDiscount = async (id) => {
  //   try {
  //     const result = await deleteDiscounts(id);
  //     if (result !== true) {
  //       // Xóa thất bại
  //       setVali("error");
  //       setInfo("Delete fail!");
  //     } else {
  //       // Xóa thành công
  //       setVali("success");
  //       setInfo("Delete complete!");
  //     }
  //     setDiscountName("");
  //   } catch (error) {
  //     console.error("Error deleting discount:", error);
  //   }
  // };
  // const handleSearchChange = async (e) => {
  //   const searchValue = e.target.value;
  //   await findDiscount(searchValue);
  //   console.log(e.target.value);
  //   console.log(discounts);
  // };
  // -----------------------------------------------------------------------------
  const discount_ip = [
    {
      type: "text",
      names: "discount_name",
      id: "discount_name",
      placeholder: "Discount_name",
    },
    {
      type: "number",
      names: "percent",
      id: "percent",
      placeholder: "Discount_percent",
    },
    {
      type: "text",
      names: "discout",
      id: "discount",
      placeholder: "Discoutn_code",
    },
    { type: "date", names: "date", id: "date", placeholder: "Expiration_date" },
  ];
  const TH = [
    { names: "Id" },
    { names: "Tên mã giảm giá" },
    { names: "Phần trăm giảm" },
    { names: "Trạng thái" },
    { names: "Mã giảm giá" },
    { names: "Ngày tạo" },
    { names: "Ngày cập nhật" },
    { names: "Số lượng" },
  ];
  const TD = [
    {
      id: 1,
      name: "Tên mã 1",
      percent: 0.05,
      active: true,
      code: "123ADACXAI",
      create: "12/12/2023",
      update: "1/2/2024",
      stock: 100,
    },
    {
      id: 2,
      name: "Tên mã 2",
      percent: 0.05,
      active: false,
      code: "123ADACXAI",
      create: "12/12/2023",
      update: "1/2/2024",
      stock: 100,
    },
    {
      id: 3,
      name: "Tên mã 3",
      percent: 0.08,
      active: true,
      code: "123ASACXAI",
      create: "12/12/2023",
      update: "1/2/2024",
      stock: 100,
    },
    {
      id: 4,
      name: "Tên mã 4",
      percent: 0.06,
      active: true,
      code: "123AVACXAI",
      create: "12/12/2023",
      update: "1/2/2024",
      stock: 100,
    },
  ];
  const modifiedTD = TD.map((item) => ({
    ...item,
    active: item.active ? "Hoạt động" : "Không hoạt động",
  }));
  const buttons = [
    { action: "/api/v1/cover", method: "POST", names: "Thêm" },
    { action: "api/v1/cover/{id}", method: "PUT", names: "Cập nhật" },
    { action: "api/v1/cover/{id}", method: "DELETE", names: "Xoá" },
  ];
  return (
    <div className="h-screen pt-12">
      <div className="mt-4">
        <div className="text-black text-start">
          <h3 className="font-bold">Manage Discount</h3>
        </div>
      </div>
      <div className="h-8/12">
        <div className="py-4 h-auto flex">
          {discount_ip.map((field, index) => (
            <InputAdmin
              type={field.type}
              name={field.names}
              id={field.id}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <TextArea
          className="w-4/12 ms-2"
          id={"description"}
          name={"description"}
        />
        {buttons.map((button, index) => (
          <BtnAdmin method={button.method} names={button.names} />
        ))}
        <SearchBar />
        <TableAdmin arraysTH={TH} arraysTD={modifiedTD} />
      </div>
    </div>
  );
}
export default AdminDiscount;
