// Profile.jsx
import React from 'react';
import styles from '../Profile/Profile.module.scss';
import avatar from '../../../../assets/imgs/ava.jpg'

function Profile() {
    return (
        <div >
            <div className={styles.column}>
                <div className={styles.profile}>
                    <img src={avatar} alt="avatar" className={styles.avatar} />
                    <h2>Đỗ Thành Phú</h2>
                    <p>Tham gia: 22 Tháng một 2024</p>
                    <hr className={styles.line} /> {/* Thêm đường gạch ngang */}
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;
