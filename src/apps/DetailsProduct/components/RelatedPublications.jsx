import Card from "./Card";
import style from "../scss/RelatedPublications.module.scss";
function RelatedPublications() {
  const list = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/51rmQvq8EtL._SY445_SX342_.jpg",
      name: "Mushoku Tensei",
      price: "100.000",
      discountPrice: "50.000",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/81ofOmVuBNL._SY466_.jpg",
      name: "Blade & Bastard",
      price: "100.000",
      discountPrice: "50.000",
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/81nFEx6upFL._AC_UF1000,1000_QL80_.jpg",
      name: "Reincarnated as a  SWORD",
      price: "100.000",
      discountPrice: "50.000",
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/51dJgNJJOsL.jpg",
      name: "86 - EIGHTY SIX",
      price: "100.000",
      discountPrice: "50.000",
    },
    {
      id: 5,
      img: "https://m.media-amazon.com/images/I/81gvhVhd9wL._AC_UF1000,1000_QL80_.jpg",
      name: "Date a live",
      price: "100.000",
      discountPrice: "50.000",
    },
  ];
  return (
    <div className="w-full">
      <p className="text-center font-bold text-2xl mb-6">Tác phẩm liên quangi</p>
      <div className="grid grid-cols-2 gap-4 px-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {list.map((item, index) => (
          <div className="w-full h-80">
            <Card
              key={index}
              imgUrl={item.img}
              name={"Demo Test"}
              beforeDiscount={"100.000"}
              afterDiscount={"50.000"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPublications;
