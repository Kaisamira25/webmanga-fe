import BtnCard from "./BtnCard";
import CartIcon from "../assets/icons/CartIcon";
import EyeIcon from "../assets/icons/EyeIcon";
function Card({
  avatarCard,
  bookName,
  bookPrice,
  priceStyle,
  discountPercent,
  summary,
  priceCurrent,
}) {
  return (
    <div className="rounded w-[500px] min-h-[300px] drop-shadow bg-[#DCEFE5]">
      <div className="h-2/3 flex">
        <div className="basis-1/2 h-[200px]">
          <div className="h-full flex justify-center">
            <img className="h-full" src={avatarCard} alt="" />
          </div>
        </div>
        <div className="basis-1/2">
          <div>
            <div>
              <a className="text-xl font-bold" href="/">
                {bookName}
              </a>
            </div>
            <div className="pl-1">
              <div className="flex gap-5">
                <p>{bookPrice}</p>
                <p>{discountPercent}</p>
              </div>
              <p className="">{priceCurrent}</p>
            </div>
          </div>
          <div className="flex mt-10 gap-10">
            <BtnCard btnIcon={<CartIcon />} />
            <BtnCard btnIcon={<EyeIcon/>}/>
          </div>
        </div>
      </div>
      <div className="mt-3 h-1/3 line-clamp-3 px-2 hover:line-clamp-none">
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Card;
