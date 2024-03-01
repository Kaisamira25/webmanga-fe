import React from 'react';
import styles from '../AddressForm/AddressForm.module.scss';

function AddressForm() {
  return (
    <div className={styles.addressForm}>
      <h2>Cập nhật địa chỉ</h2>
      <form>
        <label>
          Địa chỉ Cũ *
          <input type="address" placeholder="Nhập vào địa chỉ cũ của bạn" />
        </label>
        <div className={styles.newAddressFields}>
          <label >
            Địa chỉ Mới *
            <input type="address" placeholder="Địa chỉ mới" />
          </label>
          <label >
            Nhập Lại Địa Chỉ *
            <input type="address" placeholder="Nhập lại địa chỉ" />
          </label>
        </div>
        <button type="submit">Lưu</button>
      </form>
    </div>
  );
}

export default AddressForm;
