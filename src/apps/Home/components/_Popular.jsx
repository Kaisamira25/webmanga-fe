import Card from "../../../components/_Card";

function PopularItem() {
  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 3 },
    // Các sản phẩm khác...
  ];
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
      <div className="product-card flex flex-col  px-5  md:flex-row justify-between md:flex-wrap ">
        {products.map((product, index) => (
          <div key={index} className="py-3">
            <Card />
          </div>
        ))}
      </div>
    </article>
  );
}

export default PopularItem;
