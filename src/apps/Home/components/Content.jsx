import Card from "./CardPublications";
import style from "./Content.module.scss";
function Content() {
  const productList = [
    {
      id: 1,
      name: "Classroom of the Elite Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/81+8UiitTuL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 2,
      name: "Re:Zero: Starting Life in Another World Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/814oNkHZi7L._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 3,
      name: "Mushoku Tensei: Jobless Reincarnation Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/81mDZHZbtAL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 4,
      name: "Goblin Slayer Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/91k5blHZFyL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 5,
      name: "Grimgar of Fantasy and Ash Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/91NTidW+ITL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 6,
      name: "Classroom of the Elite: Year 2 Vol. 8",
      imgURL:
        "https://m.media-amazon.com/images/I/81xZqAhvRrL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 7,
      name: "Toradora! Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/81UIuiGkPFL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 8,
      name: "Mushoku Tensei: Jobless Reincarnation Vol. 14",
      imgURL:
        "https://m.media-amazon.com/images/I/81OZnAhp5TL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 9,
      name: "Bunny Girl Senpai Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/81pcsJPLQGL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 10,
      name: "The Angel Next Door Spoils Me Rotten Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/81cXBPgRaPL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 11,
      name: "The Dawn of the Witch Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/811mGlibl+L._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 12,
      name: "Disciple of the Lich: Or How I Was Cursed by the Gods and Dropped Into the Abyss! Vol. 5",
      imgURL:
        "https://m.media-amazon.com/images/I/81Wm3ZSutpL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 13,
      name: "Reincarnated as a Sword Vol. 4",
      imgURL:
        "https://m.media-amazon.com/images/I/81sNiE9zJHL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 14,
      name: "7th Time Loop: The Villainess Enjoys a Carefree Life Married to Her Worst Enemy! Vol. 2",
      imgURL:
        "https://m.media-amazon.com/images/I/815STNVDERL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 15,
      name: "How a Realist Hero Rebuilt the Kingdom Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/81RYM0wsPLL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
    {
      id: 16,
      name: "Sentenced to Be a Hero Vol. 1",
      imgURL:
        "https://m.media-amazon.com/images/I/91MPiCuqgbL._AC_UF1000,1000_QL80_.jpg",
        price: '100,000',
        priceDis: '50,000'
    },
  ];
  return (
    <div className={style.container}>
      {productList.map((item) => (
        <div key={item.id}>
          <Card imgSrc={item.imgURL} name={item.name} priceBeforeDiscount={item.price} priceAfterDiscount={item.priceDis}/>
        </div>
      ))}
    </div>
  );
}

export default Content;
