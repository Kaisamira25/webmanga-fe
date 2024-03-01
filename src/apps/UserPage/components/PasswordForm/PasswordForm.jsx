import React from 'react';
import styles from '../PasswordForm/PasswordForm.module.scss';

function PasswordForm() {
  return (
    <div className={styles.passwordForm}>
      <h2>Đổi mật khẩu</h2>
      <form>
        <label>
          Mật Khẩu Cũ *
          <input type="password" placeholder="Nhập vào mật khẩu cũ của bạn" />
        </label>
        <div className={styles.newPasswordFields}>
          <label >
            Mật Khẩu Mới *
            <input className={styles.newPass} type="password" placeholder="Mật khẩu mới" />
          </label>
          <label >
            Nhập Lại Mật Khẩu *
            <input className={styles.againPass} type="password" placeholder="Nhập lại mật khẩu" />
          </label>
        </div>
        <button type="submit">Lưu</button>
      </form>
    </div>
  );
}

export default PasswordForm;
