import Link from "next/link";
import { Button, icons, menu, socialMedia } from "../Tools";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useState } from "react";
import CartProducts from "./CartProducts";
import { useStateContext } from "../../context/State";

const Navbar = () => {
  // Context add Qty and Prices  =====================
  const { qty, prices } = useStateContext();

  // Show Cart ======================
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);

  // Set Link Active =================
  const active = "text-black";
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className="mb-6 md:mb-8 lg:mb-10">
      <Link
        href="/"
        className="w-full flex justify-center text-2xl uppercase font-black my-6 md:my-8 lg:my-10"
      >
        <span>i wanna shop</span>
      </Link>

      <ul className="flex justify-between items-center  w-full ">
        {icons.map((icon) => {
          return (
            <li
              key={icon.name}
              className="text-xl  md:text-3xl cursor-pointer"
              onClick={() => {
                icon.name === "menu" && setMenuToggle(!menuToggle);
                icon.name === "cart" && setCartToggle(!cartToggle);
              }}
            >
              <span className="  cursor-pointer relative">
                {icon.icon}
                <span
                  className={`${
                    (icon.name === "menu" || qty === 0) && "hidden"
                  } absolute bg-black  text-white text-[10px] font-bold flex justify-center items-center rounded-full w-5 h-5 -top-3 -right-2 `}
                >
                  {qty}
                </span>
              </span>
            </li>
          );
        })}
      </ul>

      {/* Menu ======================================*/}
      <div
        className={`z-50 bg-white fixed w-full h-full left-0 top-0 overflow-hidden pl-6 md:pl-8 lg:pl-10 flex flex-col  justify-between   duration-300 ${
          !menuToggle && " w-0 -left-[200%]"
        }`}
      >
        <div
          className="bg-black text-white text-2xl w-10 h-11 flex justify-center items-center rounded cursor-pointer  mt-6 md:mt-8 lg:mt-10 "
          onClick={() => {
            setMenuToggle(!menuToggle);
          }}
        >
          <RiArrowLeftSLine />
        </div>
        <div className=" h-full flex flex-col justify-between  py-6 md:py-8 lg:py-10 ">
          <ul className="flex flex-col justify-center gap-2 md:gap-4 lg:gap-6 h-full ">
            {menu.map((item) => {
              return (
                <li
                  key={item.title}
                  className="text-3xl md:text-4xl  font-semibold uppercase text-zinc-600 hover:text-black "
                  onClick={() => {
                    setMenuToggle(!menuToggle);
                  }}
                >
                  <Link
                    href={item.link}
                    className={currentRoute === item.link ? active : undefined}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center gap-2">
            {socialMedia.map((media) => {
              return (
                <li
                  key={media.title}
                  className="bg-black text-white text-xl w-10 h-10 flex justify-center items-center rounded"
                >
                  <Link href={media.link}>{media.icon}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Cart ======================================*/}

      <div
        className={`z-50 bg-white border-l fixed w-full md:w-1/2 lg:w-1/3 h-full right-0 top-0 overflow-hidden px-6 md:px-8 lg:px-10 flex flex-col justify-between items-center duration-300 ${
          !cartToggle && "w-0  -right-[200%]"
        }`}
      >
        <div className="flex justify-between items-center  mt-6 md:mt-8 lg:mt-10 w-full py-4 ">
          <div>
            <h3 className="capitalize font-medium text-xl">cart porducts</h3>
          </div>
          <div>
            <div
              className="bg-black text-white text-2xl w-10 h-10 flex justify-center items-center rounded cursor-pointer"
              onClick={() => {
                setCartToggle(!cartToggle);
              }}
            >
              <RiArrowRightSLine />
            </div>
          </div>
        </div>
        {/* Chekout and Total ==================== */}
        <div
          className={`${
            qty === 0 && "hidden "
          }    pb-2  w-full  rounded  flex flex-col   gap-2 items-center justify-between`}
        >
          <div className="grid grid-cols-2 gap-2  w-full">
            <div className="border border-black rounded p-2 text-sm">
              Quantites :<span className="font-semibold pl-2">{qty}</span>
            </div>
            <div className="  border border-black rounded p-2 text-sm">
              Prices :<span className="font-semibold pl-2">${prices}</span>
            </div>
          </div>
          <Button styles="bg-black text-white !w-full ">
            <Link href="/">Checkout</Link>
          </Button>
        </div>
        <div className={`h-full  w-full ${qty != 0 && "overflow-y-scroll"}`}>
          <CartProducts />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
