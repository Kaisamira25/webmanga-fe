import React from "react";

function Product({
    Imgbook,
    bookName,
    bookPrice,
    author,
    category,
    quantity,
    setQuantity,
}) {
    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

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
                <div className="flex items-center">
                    <button className="px-3 py-2 bg-green-500  text-gray-700 rounded-md" onClick={handleDecreaseQuantity}>-</button>
                    <p className="border border-gray-100 px-2 py-1 rounded-md mx-2">{quantity}</p>
                    <button className="px-3 py-2 bg-green-500  text-gray-700 rounded-md" onClick={handleIncreaseQuantity}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
