import React from 'react';
import Product from '../../../components/Product';
import img from "../../../assets/imgs/ShadowGarden.jpg";
import Quantity from '../../../components/Quantity';

function ProductList() {
    const products = [
        { id: "1" },
    ];

    return (
        <form className=''>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index}>
                        <Product
                            key={index}
                            bookName={"The Eminence In Shadow"}
                            Imgbook={img}
                            bookPrice={"100.000 VND"}
                            author={"Aizawa Daisuke"}
                            category={"Fantasy"}
                        />
                    </div>
                ))}
            </div>
        </form>
    );
}

export default ProductList;
