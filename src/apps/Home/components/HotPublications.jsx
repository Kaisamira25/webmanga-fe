import Card from "./CardPublications";
import style from "./HotPublications.module.scss";

function HotPublications() {
  const productList = [
    {
      id: 1,
      name: "The Eminence in Shadown Vol. 1",
      imgUrl:
        "https://m.media-amazon.com/images/I/81c0AcniEEL._AC_UF1000,1000_QL80_.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
    {
      id: 2,
      name: "The Eminence in Shadown Vol. 3",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620335981i/56870162.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
    {
      id: 3,
      name: "Kaiju 08 Vol. 5",
      imgUrl:
        "https://m.media-amazon.com/images/I/816K8ZBmKGL._AC_UF1000,1000_QL80_.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
    {
      id: 4,
      name: "Re:zero Starting Life In Another World vol. 23",
      imgUrl:
        "https://m.media-amazon.com/images/I/81yrZAdkw7L._AC_UF1000,1000_QL80_.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
    // {
    //   id: 5,
    //   name: "Re:zero Starting Life In Another World vol. 18",
    //   imgUrl:
    //     "https://m.media-amazon.com/images/I/81KxVUEwKvL._AC_UF1000,1000_QL80_.jpg",
    //   price: "100,000",
    //   priceDis: "50,000",
    // },
    // {
    //   id: 6,
    //   name: "Mashoku Tensei vol. 16",
    //   imgUrl:
    //     "https://m.media-amazon.com/images/I/81WEVQiuExL._AC_UF1000,1000_QL80_.jpg",
    //   price: "100,000",
    //   priceDis: "50,000",
    // },
  ];
  return (
    <article>
      <p>Hot sales</p>
      <div className="hotProducts">
        {productList.map((item) => (
          <div key={item.id}>
            <Card imgSrc={item.imgUrl} name={item.name} priceBeforeDiscount={item.price} priceAfterDiscount={item.priceDis}/>
          </div>
        ))}
      </div>
    </article>
  );
}

export default HotPublications;
