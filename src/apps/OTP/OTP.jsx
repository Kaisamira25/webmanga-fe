import React from 'react';
import EmailotP from './componnents/Emailotp';

function OTP() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
                <div>
                    <form>
                        <div>
                            <h2 className='text-4xl font-Confortaa mb-4 text-center' >verification</h2>
                        </div>
                        <div>
                            <h1 className='text-sx'> Enter email and phone number to send one time Password</h1>
                        </div>
                        <div>
                            <EmailotP />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <button type="submit" className="bg-white50 text-black py-2 px-4 rounded-md hover:bg-green600 w-full">
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
