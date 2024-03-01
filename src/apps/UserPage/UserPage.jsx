// Menu.jsx
import React from 'react';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import styles from './urPage.module.scss';
import Info from './components/Info/Info';
import PasswordForm from './components/PasswordForm/PasswordForm';
import AddressForm from './components/AddressForm/AddressForm';
import History from './components/History/History';

function UserPage() {
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

            <hr className={styles.line} />  
            
            <div className={styles.lowerContainer}>
                <History />
            </div>

            <hr className={styles.line} />  
            
            <div className={styles.middleContainer}>
              <div className={styles.left}>
                <PasswordForm />
              </div>
              <div className={styles.right}>
                <AddressForm />
              </div>
            </div>

            
          </div>
        </div>

  );
};

export default UserPage;
