import Card from "../../../components/Card";
import img from "../../../assets/imgs/ShadowGarden.jpg";
function PopularView() {
  const cardList = [
    { id: "1"},
    { id: "2"},
    { id: "3"},
    { id: "4"},
    { id: "5"}
];
  return (
    <article className="px-5 flex flex-col">
      {cardList.map((card, index) => (
        <div key={card.id} className="">
          <Card avatarCard={img} />
        </div>
      ))}
    </article>
  );
}

export default PopularView;
