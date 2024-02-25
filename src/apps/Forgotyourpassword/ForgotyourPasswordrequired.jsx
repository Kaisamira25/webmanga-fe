import React from 'react';
import EmailRequired from './components/EmailRequired';
import ButtonInputall from '../../components/ButtonInput';

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
                            <p className=' text-xs mb-1' >Nhập email của bạn để chúng tôi có thể gửi cho bạn liên kết đặt lại mật khẩu. </p>
                        </div>
                        <div>
                            <EmailRequired />
                        </div>
                        <div>
                            <ButtonInputall  type={'button'} placeholder={'Continue'} />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default Forgotpassword;
