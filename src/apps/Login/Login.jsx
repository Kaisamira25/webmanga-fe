import React from 'react';
import EmailInput from '../../components/EmailInput';
import Passwordinputall from '../../components/Passwordinput';
import ButtonInputall from '../../components/ButtonInput';
import Resform from './componnents/Goresgiterbutton';
import ForgotYourPassword from './componnents/ForgotYourButton';
function Login() {
    const handleLoginClick = () => {

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
                <div>
                    <form>
                        <div>
                            <h2 className="text-4xl font-pacifico mb-4 text-center ">Login</h2>
                        </div>
                        <div>
                            <EmailInput placeholder={'Email'} />
                            <Passwordinputall placeholder={'password'}/>
                        </div>
                        <div>
                            <ForgotYourPassword/>
                        </div>
                        <div >
                            <ButtonInputall type={'button'} onClick={handleLoginClick}  placeholder={'đăng nhập'}/>
                        </div>
                        
                        <div>
                          <Resform/>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default Login;
