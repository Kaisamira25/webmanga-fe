import React from 'react';
import Buttoncontinue from './components/Butttoncontinue';
import Passwordrequired from './components/Butttoncontinue';
import Passwordinputall from '../../components/Passwordinput';

function Forgotpassword2() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
                <div>
                    <form>
                        <div>
                            <h2 className="text-4xl font-pacifico mb-4 text-center ">Quên mật khẩu?</h2>
                        </div>
                        <div>
                            <p className=' text-xs mb-1' > </p>
                        </div>
                        <div>
                            <Passwordinputall placeholder={'password'} type={'password'} />
                            <Passwordrequired />

                        </div>
                        <div>
                            <Buttoncontinue />
                        </div>
                    </form>D
                </div>

            </div>
        </div>
    );
}
export default Forgotpassword2;
