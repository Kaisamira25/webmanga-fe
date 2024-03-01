// Info.jsx
import React from 'react';
import styles from '../Info/Info.module.scss';

function Info() {

  const userInfo = [
    { field: "Họ tên", value: "Đỗ Thành Phú" },
    { field: "Tên đăng nhập", value: "tphu" },
    { field: "Email", value: "dothanhphu01012002@gmail.com" },
    { field: "Trên Donate", value: "DLND" },
    { field: "Điểm VIP", value: "0" },
    { field: "SteamID", value: "Chưa có ☹️" },
    { field: "Bài đăng diễn đàn", value: "0 bài đăng" }
  ];

  return (
            <div className={styles.column}>
                <div className={styles.details}>
                    <h1>Thông tin tài khoản</h1>
                    {userInfo.map((info, index) => (
                      <p key={index} >{info.field}: {info.value}</p>
                    ))}
                </div>
            </div>
  );
};

export default Info;
