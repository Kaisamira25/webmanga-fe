import React from 'react';
import ButtonInputall from '../../components/ButtonInput';
import Resform from './componnents/GoResgiterButton';
import LoginForm from './componnents/LoginForm';
import ForgotYourPassword from './componnents/ForgotYourButton';

function Login() {

    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
                <div>
                    <form>
                        <div>
                            <h2 className="text-4xl font-pacifico mb-4 text-center ">Đăng Nhập</h2>
                        </div>
                        <div>

                            <LoginForm />
                        </div>
                        <div>
                            <ForgotYourPassword />
                        </div>
                        <div >
                            <ButtonInputall type={'button'}  placeholder={'đăng nhập'} />
                        </div>

                        <div>
                            <Resform />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default Login;
