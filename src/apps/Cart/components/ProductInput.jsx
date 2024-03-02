import React, { useState } from 'react';
import ProductList from './ProductList';

function ProductRe() {
    return (
        <div className="container mx-auto p-4 bg-green-200">
            <div className="border border-black rounded-md p-4">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="title">
                        <div className="flex justify-between">
                            <p className="text-xl font-semibold">Product</p>
                            <p className="text-xl font-semibold">Total</p>
                        </div>
                        <div className="border-b border-black my-4"></div>
                        <div className="product">
                            <div>
                                <ProductList />
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <h2 className="text-xl text-center font-semibold">Cart Total</h2>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductRe;
