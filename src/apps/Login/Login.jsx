import React from 'react';
import InputLG from '../../components/_InputLG';
import Buttonlg from './componnents/LGbutton';
import Resform from './componnents/goresbutton';
import Fgpw from './componnents/Forgotpw';

function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
                <div>
                    <form>
                        <div>
                            <h2 className="text-4xl font-Pacifico mb-4 text-center ">Login</h2>
                        </div>
                        <div>
                            <InputLG />
                        </div>
                        <div>
                            <Fgpw />
                        </div>
                        <div>
                            <Buttonlg />
                        </div>
                        <div className="flex flex-row">
                            <p className="text-xs  my-2 mx-2">Don’t have an account yet?</p>
                            <Resform />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;
