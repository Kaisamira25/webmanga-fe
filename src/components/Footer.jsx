import FaceBookIcon from "../assets/icons/LogosFacebook";
import XIcon from "../assets/icons/TwitterIcon";
import MapIcon from "../assets/icons/MapPointIcon";
import PhoneIcon from '../assets/icons/PhoneIcon'
import TikTokIcon from '../assets/icons/LogosTiktokIcon'
function Footer() {
  return (
    <footer className="w-full bg-white100 h-auto flex p-10 md:p-20">
      <div className="basis-1/2">
        <p className="font-bold text-2xl">LAINOVO</p>
        <div className="flex flex-col text-md">
          <a href="/">Home</a>
          <a href="/">Publications</a>
          <a href="/">Cart</a>
          <a href="/">User Info</a>
        </div>
      </div>
      <div className="basis-1/2">
        <p className="font-bold text-2xl">About Us</p>
        <div className="text-md flex-col space-y-3">
          <div className="flex items-center gap-4">
            <span>
              <MapIcon />
            </span>
            <p>8/4C1 tổ 20 ấp 30 huyện Miền Đất Hứa, thành phố Trên Không</p>
          </div>
          <p className="flex gap-4 text-xl">
            <a href="/">
              <FaceBookIcon />
            </a>
            <a href="/">
              <XIcon />
            </a>
            <a href="/">
                <TikTokIcon/>
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span>
                <PhoneIcon/>
            </span>
            <p>0988681424</p>
          </div>
        </div>
      </div>
      {/* demo */}
    </footer>
  );
}

export default Footer;
