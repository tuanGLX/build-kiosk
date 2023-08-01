import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import LogoTrade from "@/assets/glx_trade.png";
import LogoBear from "@/assets/bear_glx.png";
import IconAppStore from "@/assets/icon-ios-app-store.svg";
import IconGGSTore from "@/assets/icon-google-app-store.svg";
import useTranslation from "next-translate/useTranslation";
const FooterTop = () => {
  const { t } = useTranslation();
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
        <div id="connect" className="footer__connect">
          <div className="footer__logo mb-5">
            <Image
              src="/galaxy-logo-footer.svg"
              alt="Galaxy - Cinema"
              width={94}
              height={42}
            />
          </div>
          <ul>
            <li>
              <Link href="https://facebook.com/galaxycine.vn" target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/user/galaxymovies"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/galaxycinema"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              </Link>
            </li>
          </ul>
          <div className="connect__trade mt-5">
            <Link
              href="http://online.gov.vn/Home/WebDetails/5005"
              target="_blank"
            >
              <Image src={LogoTrade} width={150} alt="Logo Youtube" />
            </Link>
          </div>
        </div>
        {/* {NavFooter.map((nav) => (
          <div key={nav.id}>
            <h3 className={styles.footer__title}>{t(`footer:${nav.label}`)}</h3>
            <ul>
              {nav.list.map((item, index) => (
                <li
                  className="hover:text-[#FD841F] transition-all duration-300"
                  key={index}
                >
                  <Link
                    href={item.path}
                    className={`${styles.footer__list__item} leading-10 text-[#d0d0d0] hover:text-[#FD841F] transition-all duration-300`}
                  >
                    {t(`footer:${item.title}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))} */}

        <div
          id="register"
          className="grid grid-cols-1 md:grid-cols-[300px_minmax(900px,1fr)_100px] xl:block"
        >
          <div>
            <Image src={LogoBear} alt="Galaxy - Cinema" width={80} />
            <div>
              <p className="text-sm font-bold not-italic uppercase">
                {t(`footer:join_G_star_now`)}
              </p>
              {/* <a onClick={() => eventChannel.emit("openSignUpModal")}>
                {t(`footer:sign_up_now`)}
              </a> */}
            </div>
          </div>
          <div id="connect" className="mt-5">
            <h3>{t(`footer:download_app`)}</h3>
            <ul className="list-none">
              <li className="inline-block">
                <Link
                  href={`https://apps.apple.com/vn/app/id593312549`}
                  className="inline-block"
                  target="_blank"
                >
                  <Image
                    src={IconAppStore}
                    alt="Icon App Store"
                    width={140}
                    height={120}
                  />
                </Link>
              </li>
              <li className="inline-block ml-1">
                <Link
                  href={`https://play.google.com/store/apps/details?id=com.galaxy.cinema&hl=vi`}
                  className="inline-block"
                  target="_blank"
                >
                  <Image
                    src={IconGGSTore}
                    alt="Icon Google App Store"
                    width={150}
                    height={140}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
