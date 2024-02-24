import React, { useState } from 'react';
import EmailIP from './componnents/Emailresinput';
import Username from './componnents/Username';
import Passwordinput from './componnents/Passwordinputresgister';
import Passwordrepeat from './componnents/Passwordrepeatresgister'
import RESGISTER from './componnents/Resgisterbutton';
import Lgform from './componnents/Gologinbutton';
import Passwordinputall from '../../components/Passwordinput';
function REGIS() {
    const [errorMessage, setErrorMessage] = useState("");
 

    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
                <div>
                    <form>
                        <div>
                            <h2 className="text-4xl  mb-4 text-center font-pacifico ">Resgirter</h2>
                        </div>
                        <div>
                            <form>
                                <Username placeholder={'Username'} />
                                <EmailIP placeholder={'Email'} />
                               <Passwordinputall placeholder={'password'} type={'password'}/>
                            </form>

                        </div>
                        <div>
                            <RESGISTER />
                        </div>
                        <div className="flex flex-row">
                            <p className="text-xs  my-2 mx-2">Already have an account ?</p>
                            <Lgform />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default REGIS;
