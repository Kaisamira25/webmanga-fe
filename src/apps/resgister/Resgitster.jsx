import React from 'react';
import ResgisterFormRequired from './componnents/ResgisterFormRequired';
import ButtonInputall from '../../components/ButtonInput';
import GoLogin from './componnents/Gologinbutton';
function REGIS() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-green400">
            <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
                <div>
                    <form>
                        <div>
                            <h2 className="text-4xl  mb-4 text-center font-pacifico ">Đăng ký</h2>
                        </div>
                        <div>
                            <ResgisterFormRequired />
                        </div>
                        <div>
                            <ButtonInputall   type={'button'} placeholder={'Đăng Ký'}/>
                        </div>
                        <div >
                           <GoLogin/>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default REGIS;
