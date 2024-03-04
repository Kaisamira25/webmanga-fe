    import React, { useState } from 'react';
    import Product from '../../../components/Product';
    import img from "../../../assets/imgs/ShadowGarden.jpg";
    import img86 from '../../../assets/imgs/86.jpg';

    function ProductList() {
        const [products, setProducts] = useState([
            { id: "1", bookName: "The Eminence In Shadow", img: img, bookPrice: "100.000 VND ", author: "Aizawa Daisuke", category: "Fantasy" },
            { id: "2", bookName: "86 eighty six", img: img86, bookPrice: "80.000 VND ", author: "Asato Asato", category: "Fantasy" },
        ]);

        return (
            <div className="product-list">
                {products.map((field, index) => (
                    <div key={index}>
                     
                        <Product
                            key={index}
                            bookName={field.bookName}
                            Imgbook={field.img}
                            bookPrice={field.bookPrice}
                            author={field.author}
                            category={field.category}

                        />
                        {index !== products.length - 1 && <hr className="my-4 border-t-2 border-black" />}
                    </div>
                ))}
            </div>
        );
    }

    export default ProductList;
