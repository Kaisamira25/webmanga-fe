import Card from "../../../components/Card";
import AvatarCard from "../../../assets/imgs/ShadowGarden.jpg";
function Products() {
  return (
    <article className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card
        avatarCard={AvatarCard}
        bookName={"Shadow"}
        bookPrice={"100.000 VND"}
        discountPercent={"20%"}
        priceCurrent={"80.000 VND"}
        summary={"Sheheheh"}
      />
    </article>
  );
}

export default Products;
