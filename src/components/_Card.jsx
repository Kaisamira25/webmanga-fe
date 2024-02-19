import BtnShopping from "../apps/Home/components/_BtnShopping";

function Card({ bookName, bookPrice , bookPriceAfterDiscount,margin}) {
  return (
    // <section className="min-h-80 drop-shadow relative rounded-lg bg-wrapper200 md:w-80 mb-32">
    //   <div className="absolute w-full flex -top-14 h-72">
    //     <div className="w-1/2 flex justify-center">
    //       <img
    //         className="max-h-80 md:max-h-52 rounded-sm"
    //         src="/src/assets/imgs/ShadowGarden.jpg"
    //         alt=""
    //       />
    //     </div>
    //     <div className="w-1/2 pt-16 md:px-1">
    //       <div>
    //         <a className="break-words font-bold text-xl" href="/">
    //           {bookName}
    //         </a>
    //         <div className="mt-10 md:mt-4 font-semibold flex space-x-2">
    //           <p className="line-through md:text-sm">{bookPrice}</p>
    //           <p className="md:text-sm">{bookPriceAfterDiscount}</p>
    //         </div>
    //         <p className="">- 50%</p>
    //       </div>
    //       <div className="flex space-x-2 md:hidden pt-5">
    //         <BtnShopping btnName={"Cart"} />
    //         <BtnShopping btnName={"Order"} />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="hidden pt-44 space-x-5 md:flex md:justify-evenly mb-3">
    //     <BtnShopping btnName={"Cart"}/>
    //     <BtnShopping btnName={"Order"}/>
    //   </div>
    //   <p className="pt-60 md:pt-2 px-3 line-clamp-3 hover:line-clamp-none mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi aperiam molestias, animi, dolores enim et illum vitae quo ullam similique ad impedit laboriosam facilis error quos aliquam ex aliquid? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, fuga maxime? Nihil odio amet ratione. Atque dolores, iste odio architecto id illum. Fugiat sapiente ab explicabo numquam maxime inventore delectus.</p>
    // </section>
    <section className={`bg-background400 min-h-80 w-60`}>
      <p className="line-clamp-3 hover:line-clamp-none pt-40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore doloremque nam dolorem repellat neque sit ipsam officiis in dicta adipisci eaque, tenetur velit voluptates error excepturi alias consequatur! Placeat.</p>
    </section>
  );
}

export default Card;
