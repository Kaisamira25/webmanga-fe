// Menu.jsx
import React from 'react';
import styles from '../Menu/Menu.module.scss'

function Menu() {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
            <a href="#">Hồ sơ</a>
            <a href="">Cài đặt</a>
            <a href="#">Hoạt động</a>
        </div>
        </div>
    );
};

export default Menu;
