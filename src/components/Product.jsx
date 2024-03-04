import React from "react";
import Quantity from "./Quantity";

function Product({
    Imgbook,
    bookName,
    bookPrice,
    author,
    category,
}) {
    return (
        <div className="rounded min-h-[300px] drop-shadow">
            <div className="h-2/3 flex">
                <div className="basis-1/2 h-[200px] xl:basis-1/3">
                    <div className="h-full flex justify-center xl:pl-2 xl:pt-2 xl:justify-normal">
                        <img className="h-full" src={Imgbook} alt="" />
                    </div>
                </div>
                <div className="basis-1/2 xl:basis-2/3">
                    <div>
                        <div>
                            <a className="text-xl font-bold" href="/">
                                {bookName}
                            </a>
                        </div>
                        <div className="pl-1">
                            <div className="flex justify-between">
                                <p>{author}</p>
                                <p>{bookPrice}</p>

                            </div>
                            <p className="">{category}</p>
                        </div>
                        <div>
                            <Quantity/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;
