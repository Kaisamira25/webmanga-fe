import React from 'react';
import PasswordIP  from '../apps/Login/componnents/PasswordInput'
import EmailIP from '../apps/Login/componnents/Emaillogininput';

function InputLG() {
  return (
    <div >
    <EmailIP placeholder={'Email'}/>
    <PasswordIP placeholder={'Password'} type={'password'}/>
    </div>
  );
}

export default InputLG;