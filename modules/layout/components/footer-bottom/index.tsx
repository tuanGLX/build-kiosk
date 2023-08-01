import {
  faMobilePhone,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const FooterBottom = () => {
  return (
    <div className="flex justify-items-start justify-start items-center gap-5">
      <div className="footer__logo">
        <Image
          src="/galaxy-logo-footer.svg"
          alt="Galaxy - Cinema"
          width={94}
          height={42}
        />
      </div>
      <div>
        <h3>CÔNG TY CỔ PHẦN PHIM THIÊN NGÂN</h3>
        <p>
          Toà nhà Bitexco Nam Long, 63A Võ Văn Tần, Phường 6, Quận 3, Tp. Hồ Chí
          Minh, Việt Nam
        </p>
        <p>
          <FontAwesomeIcon icon={faMobilePhone} />:{" "}
          <a
            className="hover:text-[#FD841F] transition-all duration-300"
            href="tel:02839333303"
          >
            028.39.333.303
          </a>{" "}
          - <FontAwesomeIcon icon={faPhone} />:{" "}
          <a
            className="hover:text-[#FD841F] transition-all duration-300"
            href="tel:19002224"
          >
            1900.2224
          </a>{" "}
          - <FontAwesomeIcon icon={faPaperPlane} />:{" "}
          <a
            className="hover:text-[#FD841F] transition-all duration-300"
            href="mailto:supports@galaxy.com.vn"
            target="_blank"
          >
            supports@galaxy.com.vn
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom
