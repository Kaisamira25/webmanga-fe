import React from 'react';

import Buttoncontinue from './components/ButttonContinue';
import EmailInput from '../../components/EmailInput';

function Forgotpassword() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
                <div>
                    <form>
                        <div>
                            <h2 className="text-4xl font-pacifico mb-4 text-center ">Quên mật khẩu?</h2>
                        </div>
                        <div>
                            <p className=' text-xs mb-1' >Nhập tên người dùng hoặc email  của bạn để chúng tôi có thể gửi cho bạn liên kết đặt lại mật khẩu. </p>
                        </div>
                        <div>
                           <EmailInput placeholder={'Email'}/>
                        </div>
                        <div>
                            <Buttoncontinue/>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default Forgotpassword;
