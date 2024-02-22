import React from 'react';
import EmailIP from './componnents/Emailresinput';
import Username from './componnents/Username';
import PasswordRS from './componnents/Passwordinput';
import PasswordRP from './componnents/Passwordrepeat'
import RESGISTER from './componnents/Resgisterbutton';
import Lgform from './componnents/Gologinbutton';
function REGIS() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
                <div>
                    <form>
                        <div>
                            <h2 className="text-4xl  mb-4 text-center font-pacifico ">REGISTER</h2>
                        </div>
                        <div>
                            <form>
                                <Username placeholder={'username'}  />
                                <EmailIP placeholder={'Email'}/>
                                <PasswordRS placeholder={'Mật khẩu '} type={'password'}/>
                                <PasswordRP placeholder={'nhập lại mật khẩu'} type={'password'}/>
                            </form>

                        </div>
                        <div>
                            <RESGISTER />
                        </div>
                        <div className="flex flex-row">
                            <p className="text-xs  my-2 mx-2">Already have an account ?</p> 
                             <Lgform/>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default REGIS;
