import Card from "../../../components/Card";
import img from "../../../assets/imgs/ShadowGarden.jpg";
function PopularView() {
  const cardList = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },

  ];
  return (
    <article className="px-5 grid grid-cols-1 justify-items-center gap-y-9 md:grid md:grid-cols-2 md:gap-y-9 md:justify-items-center lg:grid-cols-3 lg:gap-x-4 xl:grid-cols-4">
      {cardList.map((card, index) => (
        <div key={index} className="">
          <Card
            bookName={"The Eminence In Shadow"}
            avatarCard={img}
            bookPrice={"100.000 VND"}
            priceStyle={""}
            discountPercent={"-50%"}
            summary={
              "Even in his past life, Cid's dream wasn't to become a protagonist or a final boss. He'd rather lie low as a minor character until it's prime time to reveal he's a mastermind...or at least, do the next best thing-pretend to be one! And now that he's been reborn into another world, he's ready to set the perfect conditions to live out his dreams to the fullest. Armed with his overactive imagination, Cid jokingly recruits members to his organization and makes up a whole backstory about an evil cult that they need to take down. Well, as luck would have it, these imaginary adversaries turn out to be the real deal-and everyone knows the truth but him!"
            }
          />
        </div>
      ))}
    </article>
  );
}

export default PopularView;
