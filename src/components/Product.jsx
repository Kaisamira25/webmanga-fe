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
        <div className="border border-gray-200 p-4 rounded-md shadow-md flex">
            <div className="mr-4">
                <img className="w-24 h-auto" src={Imgbook} alt={bookName} />
            </div>
            <div className="flex-grow">
                <div>
                    <a className="text-xl font-bold">{bookName}</a>
                </div>
                <div className="pl-1 flex justify-between">
                    <div>
                        <p>{author}</p>
                    </div>
                    <div>
                        <p>{bookPrice}</p>
                    </div>
                </div>
                <div>
                    <p className="">{category}</p>
                </div>
                <div>
                    <Quantity />
                </div>
            </div>
        </div>
    );
}

export default Product;
