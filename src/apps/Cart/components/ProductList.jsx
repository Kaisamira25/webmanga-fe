import React, { useState } from "react";
import Product from "../../../components/Product";
import img from "../../../assets/imgs/ShadowGarden.jpg";
import img86 from "../../../assets/imgs/86.jpg";

function ProductList() {
    const [products, setProducts] = useState([
        {
            id: "1",
            bookName: "The Eminence In Shadow",
            img: img,
            bookPrice: "100.000 VND ",
            author: "Aizawa Daisuke",
            category: "Fantasy",
            quantity: 0,
        },
        {
            id: "2",
            bookName: "86 eighty six",
            img: img86,
            bookPrice: "80.000 VND ",
            author: "Asato Asato",
            category: "Fantasy",
            quantity: 0,
        },
    ]);

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index}>
                    <Product
                        bookName={product.bookName}
                        Imgbook={product.img}
                        bookPrice={product.bookPrice}
                        author={product.author}
                        category={product.category}
                        quantity={product.quantity}
                        setQuantity={(newQuantity) => {
                            const updatedProducts = [...products];
                            updatedProducts[index].quantity = newQuantity;
                            setProducts(updatedProducts);
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductList;
