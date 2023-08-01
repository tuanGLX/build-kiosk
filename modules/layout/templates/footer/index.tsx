import FooterBottom from "../../components/footer-bottom";
import FooterTop from "../../components/footer-top";

const Footer = () => {
  return (
    <footer className="bg-gray-dark overflow-hidden mt-auto w-full">
      <div className="container mx-auto">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};
export default Footer;
