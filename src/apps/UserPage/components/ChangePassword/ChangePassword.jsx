import React from "react";
import InputUser from "../InputUser/InputUser";

function ChangePassword() {
  const fields = [
    {
      label: "Old Password *",
      type: "password",
      placeholder: "Enter Old Password",
    },
    {
      label: "New Password *",
      type: "password",
      placeholder: "Enter New Password",
    },
    {
      label: "Re-enter Password *",
      type: "password",
      placeholder: "Re-enter Password",
    },
  ];

  return (
    <div>
      <InputUser title="Change Password" fields={fields} />
    </div>
  );
}

// function ChangePassword() {
//   return (
//     <div className={styles.passwordForm}>
//       <h2>Đổi mật khẩu</h2>
//       <form>
//         <label>
//           Mật Khẩu Cũ *
//           <input type="password" placeholder="Nhập vào mật khẩu cũ của bạn" />
//         </label>
//         <div className={styles.newPasswordFields}>
//           <label >
//             Mật Khẩu Mới *
//             <input className={styles.newPass} type="password" placeholder="Mật khẩu mới" />
//           </label>
//           <label >
//             Nhập Lại Mật Khẩu *
//             <input className={styles.againPass} type="password" placeholder="Nhập lại mật khẩu" />
//           </label>
//         </div>
//         <button type="submit">Lưu</button>
//       </form>
//     </div>
//   );
// }

export default ChangePassword;
