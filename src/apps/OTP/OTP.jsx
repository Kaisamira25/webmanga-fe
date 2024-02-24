import React,{ useState } from 'react';
import EmailotP from './componnents/Emailotp';

function OTP() {
    const [otpValue, setOTPValue] = useState('');
    const handleOTPChange = (newValue) => {
        setOTPValue(newValue);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg h-80 w-96">
                <div>
                    <form className="flex flex-col w-auto h-auto items-center">
                        <div>
                            <h2 className='text-4xl font-Confortaa mb-4 text-center' >Xác minh</h2>
                        </div>
                        <div>
                            <h1 className='text-base mb-1'>Nhập mã 6 số chúng tôi vừa gửi cho bạn  </h1>
                        </div>
                        <div className='text-base mb-1 mt-4'>
                            <EmailotP value={otpValue} onChange={handleOTPChange} placeholder={'Nhập mã 6  chữ số '} />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <button type="submit"  className="bg-white50 text-black py-2 px-4 rounded-md hover:bg-green600 w-full mt-4">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OTP;
