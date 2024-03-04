// Menu.jsx
import React from 'react';
import Profile from './components/Profile/Profile';
import styles from './User.module.scss';
import Info from './components/Info/Info';
import ChangePassword from './components/ChangePassword/ChangePassword';
import ChangeAddress from './components/ChangeAddress/ChangeAddress';
import History from './components/History/History';

function User() {
  return (

        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.upperContainer}>
              <div className={styles.left}>
                <Profile />
              </div>
              <div className={styles.right}>
                <Info />
              </div>
            </div>

            {/* <hr className={styles.line} />   */}
            
            <div className={styles.middleContainer}>
                <History />
            </div>

            {/* <hr className={styles.line} />   */}
            
            <div className={styles.lowerContainer}>
              <div className={styles.left}>
                <ChangePassword />
              </div>
              <div className={styles.right}>
                <ChangeAddress />
              </div>
            </div>

            
          </div>
        </div>

  );
};

export default User;