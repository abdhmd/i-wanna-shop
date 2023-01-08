import { RxHamburgerMenu } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

// Styles Components ==================================================
export const Section = ({ children }) => {
  return <section className=" py-6 md:py-8 lg:py-10">{children} </section>;
};
export const Button = ({ children, styles }) => {
  return (
    <button
      className={`px-6 py-2  border border-black   text-sm font-semibold uppercase rounded  w-fit ${styles}`}
    >
      {children}{" "}
    </button>
  );
};

// Data  ==============================================================

export const icons = [
  {
    name: "menu",
    icon: <RxHamburgerMenu />,
  },

  {
    name: "cart",
    icon: <BsBag />,
  },
];

export const menu = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "about us",
    link: "/about",
  },
  {
    title: "contact us",
    link: "/contact",
  },
];

export const socialMedia = [
  {
    title: "facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com",
  },
  {
    title: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    title: "tiktok",
    icon: <FaTiktok />,
    link: "https://www.tiktok.com",
  },
];
