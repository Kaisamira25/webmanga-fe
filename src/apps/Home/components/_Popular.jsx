import Card from "../../../components/_Card";

function PopularItem() {
  return (
    // <article>
    //   <p className="text-2xl text-center">Popular Publications</p>
    //   <div className="mt-32 flex flex-col md:flex-row md:flex-wrap px-4 md:justify-around">
    //     <Card bookName={"The Eminence In Shadow"} bookPrice={"100.000 VND"} bookPriceAfterDiscount={"50.000 VND"}/>
    //     <Card bookName={"The Eminence In Shadow"} bookPrice={"100.000 VND"} bookPriceAfterDiscount={"50.000 VND"}/>
    //     <Card bookName={"The Eminence In Shadow"} bookPrice={"100.000 VND"} bookPriceAfterDiscount={"50.000 VND"}/>
    //     <Card bookName={"The Eminence In Shadow"} bookPrice={"100.000 VND"} bookPriceAfterDiscount={"50.000 VND"}/>
    //   </div>
    // </article>
    <article>
      <p className="text-center text-3xl mb-10">Popular Publications</p>
      <div className="product-card flex flex-col px-5 md:flex-row place-content-around md:flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </article>
  );
}

export default PopularItem;
