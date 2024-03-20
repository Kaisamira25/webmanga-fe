import Card from "./CardPublications";
import style from "./NewPublications.module.scss";
function NewPublications() {
  const newList = [
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
    {
      id: 5,
      name: "Re:zero Starting Life In Another World vol. 23",
      imgUrl:
        "https://m.media-amazon.com/images/I/81yrZAdkw7L._AC_UF1000,1000_QL80_.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
    {
      id: 6,
      name: "Re:zero Starting Life In Another World vol. 23",
      imgUrl:
        "https://m.media-amazon.com/images/I/81yrZAdkw7L._AC_UF1000,1000_QL80_.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
    {
      id: 7,
      name: "Re:zero Starting Life In Another World vol. 23",
      imgUrl:
        "https://m.media-amazon.com/images/I/81yrZAdkw7L._AC_UF1000,1000_QL80_.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
    {
      id: 8,
      name: "Re:zero Starting Life In Another World vol. 23",
      imgUrl:
        "https://m.media-amazon.com/images/I/81yrZAdkw7L._AC_UF1000,1000_QL80_.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
    {
      id: 9,
      name: "Re:zero Starting Life In Another World vol. 23",
      imgUrl:
        "https://m.media-amazon.com/images/I/81yrZAdkw7L._AC_UF1000,1000_QL80_.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
    {
      id: 10,
      name: "Re:zero Starting Life In Another World vol. 23",
      imgUrl:
        "https://m.media-amazon.com/images/I/81yrZAdkw7L._AC_UF1000,1000_QL80_.jpg",
      price: "100,000",
      priceDis: "50,000",
    },
  ];
  return (
    <div className={style.newProductWrapper}>
      <div className={style.wrapper}>
        <div className={style.inner}>
          {newList.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewPublications;
