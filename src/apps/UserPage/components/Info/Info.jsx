// Info.jsx
import React from 'react';
import styles from '../Info/Info.module.scss';

function Info() {

  const userInfo = [
    { field: "Họ tên", value: "Đỗ Thành Phú" },
    { field: "Email", value: "dothanhphu01012002@gmail.com" },
    { field: "Số điện thoại", value: "0945055792" },
    { field: "Địa chỉ", value: "86/52 Tân Chánh Hiệp, phường Tân Chánh Hiệp, quận 12, Thành phố Hồ Chí Minh" }
  ];

  return (
            <div className={styles.column}>
                <div className={styles.details}>
                    <h1>Thông tin tài khoản</h1>
                    <hr className={styles.line} /> 
                    {userInfo.map((info, index) => (
                      <p key={index} ><span>{info.field}</span>: {info.value}</p>
                    ))}
                </div>
            </div>
  );
};

export default Info;
