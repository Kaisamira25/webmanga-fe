import React from 'react';
import styles from './ChangePassword.module.scss';
import InputField from '../../../../components/InputField/InputField';


function ChangePassword() {
  const fields = [
    { label: 'Old Password *', type: 'password', placeholder: 'Enter Old Password' },
    { label: 'New Password *', type: 'password', placeholder: 'Enter New Password' },
    { label: 'Re-enter Password *', type: 'password', placeholder: 'Re-enter Password' },
  ];

  return (
    <div className={styles.passwordForm}>
      <h2>Change Password</h2>
      <form>
        {fields.map((field, index) => (
          <InputField
            key={index} 
            label={field.label} 
            type={field.type} 
            placeholder={field.placeholder} 
            className={styles.className} 
          />
        ))}
        <button type="submit">Save</button>
      </form>
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
