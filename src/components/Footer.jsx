import FaceBookIcon from "../assets/icons/LogosFacebook";
import XIcon from "../assets/icons/TwitterIcon";
import MapIcon from "../assets/icons/MapPointIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import TikTokIcon from "../assets/icons/LogosTiktokIcon";
import FooterStyle from "./scss/Footer.module.scss";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate("/home");
  };
  const handleNavigateToCart = () => {
    navigate("/cart");
  };
  const handleNavigateToUser = () => {
    navigate("/user");
  };
  const handleNavigateToAboutUs = () => {
    navigate("/aboutus");
  };
  return (
    <footer className={FooterStyle.footerWrapper}>
      <p>LAINOVO</p>
      <div className={FooterStyle.footerContent}>
        <div className={FooterStyle.leftContent}>
          <div>
            <span>
              Address:{" "}
              <span>
                8/4C1 tổ 10 ấp 3 xã Xuân Thới Sơn, huyện Hóc Môn, tp Hồ Chí Minh
              </span>
            </span>
            <span>
              Hotline: <span>0988681424</span>
            </span>
            <span>
              Email: <span>thienthan726@gmail.com</span>
            </span>
          </div>
        </div>
        <div className={FooterStyle.rightContent}>
          <div>
            <ul>
              <li onClick={handleNavigateToHome}>Home</li>
              <li onClick={handleNavigateToCart}>Cart</li>
              <li onClick={handleNavigateToAboutUs}>About</li>
              <li onClick={handleNavigateToUser}>Account</li>
            </ul>
          </div>
          <div className={FooterStyle.anotherChannel}>
            <ul>
              <li>
                <FaceBookIcon />
              </li>
              <li>
                <TikTokIcon />
              </li>
              <li>
                <XIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
