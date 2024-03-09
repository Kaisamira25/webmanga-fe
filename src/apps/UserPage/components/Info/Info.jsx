// Info.jsx
import React from 'react';
import styles from '../Info/Info.module.scss';

function Info() {

  const userInfo = [
    { field: "Full Name", value: "Do Thanh Phu" },
    { field: "Email", value: "dothanhphu01012002@gmail.com" },
    { field: "Phone Number", value: "0945055792" },
    { field: "Address", value: "86/52 Tan Chanh Hiep, Tan Chanh Hiep Ward, District 12, Ho Chi Minh City" }
  ];

  return (
            <div className={styles.column}>
                <div className={styles.details}>
                    <h1>Account Information</h1>
                    <hr className={styles.line} /> 
                    {userInfo.map((info, index) => (
                      <p key={index} ><span>{info.field}</span>: {info.value}</p>
                    ))}
                </div>
            </div>
  );
};

export default Info;
