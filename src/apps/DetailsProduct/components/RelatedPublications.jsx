import Card from "./Card";
import style from "../scss/RelatedPublications.module.scss";
function RelatedPublications() {
  const list = [
    {
      id: 1,
      img: "https://imgs.search.brave.com/uOqzd81tPwEWaTpLsCkRPKJ0Mr61BQXzkLURY4h7TC8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFkWjd6dWQ2WEwu/anBn",
      name: "Am I Actually The Strongest Vol.3",
      price: "100.000",
      discountPrice: "50.000",
    },
    {
      id: 2,
      img: "https://imgs.search.brave.com/WL_hGJFu9uDRJqBraQwT3aBq7ChwFCh6txUml3HlerM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFYMkxrNHVsUUwu/anBn",
      name: "That Time I Got Reincarnated as a Slime Vol.11",
      price: "100.000",
      discountPrice: "50.000",
    },
    {
      id: 3,
      img: "https://imgs.search.brave.com/YYNBo_UaIK5K6JeOoWFnC4-d403heywC6khJYIP1TZc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvYXJ0/LW11c2hva3UtdGVu/c2VpLWpvYmxlc3Mt/cmVpbmNhcm5hdGlv/bi12b2x1bWUtMjYt/ZW5nbGlzaC12MC1S/cEoyUk80dk1wZGhJ/NXB5MTZYYkN6MjhT/aTl4ZlRFVE1RX3M0/ZHg0dURvLmpwZz93/aWR0aD02NDAmY3Jv/cD1zbWFydCZhdXRv/PXdlYnAmcz1kN2Y0/MzI4MWJmOGVhOWQz/ZmIzMjU5Y2RlM2U2/MzFmMTJmZDhmN2Vi",
      name: "Mushoku Tensei Vol.26",
      price: "100.000",
      discountPrice: "50.000",
    },
    {
      id: 4,
      img: "https://imgs.search.brave.com/GxxhAsQVvf8u3w1b1PAU-loOiPMj-fqiO-BiNItx7jU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE3MmtJYWg0OEwu/anBn",
      name: "The Eminence In Shadow Vol.4",
      price: "100.000",
      discountPrice: "50.000",
    },
    {
      id: 5,
      img: "https://imgs.search.brave.com/3mEeQ2HvYs_jE6exYklJYPOMh2gpAYSxmP8hRnl4cOE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFXYmd5ZWMxbkwu/anBn",
      name: "The Eminence In Shadow Vol.7",
      price: "100.000",
      discountPrice: "50.000",
    },
  ];
  return (
    <div className="w-full">
      <p className="text-center font-bold text-2xl mb-6">Tác phẩm liên quan</p>
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
    // <div className={style.container}>
    //   {list.map((item, index) => (
    //     <Card
    //       key={index}
    //       imgUrl={item.img}
    //       name={item.name}
    //       beforeDiscount={"100,000VND"}
    //       afterDiscount={"99,000VND"}
    //     />
    //   ))}
    // </div>
  );
}

export default RelatedPublications;
