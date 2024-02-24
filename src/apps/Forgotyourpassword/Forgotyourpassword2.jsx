import React from 'react';
import Buttoncontinue from './components/Butttoncontinue';
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
                            <p className=' text-xs mb-1' >Nhập tên người dùng hoặc email  của bạn để chúng tôi có thể gửi cho bạn liên kết đặt lại mật khẩu. </p>
                        </div>
                        <div>
                            
                           <Passwordinputall placeholder={'password'} type={'password'}/>
                           <Passwordinputall placeholder={'repeat password'} type={'password'}/>
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
export default Forgotpassword2;