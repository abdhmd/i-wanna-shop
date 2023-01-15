import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../components/Tools";
import { useStateContext } from "../context/State";

const checkout = () => {
  const { qty, prices, cartItems, deleteOn, removeOn, addOn } =
    useStateContext();

  return (
    <div>
      <Link href="/" className="uppercase">
        <div className="flex gap-4 items-center my-6">
          <span className="bg-black text-white text-xl w-10 h-10 flex justify-center items-center rounded ">
            <RiArrowLeftSLine />
          </span>
          <span className="font-medium text-lg">back to home</span>
        </div>
      </Link>

      <div>
        <div className="mt-6 md:mt10 lg:mt-12">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-6">
            Your Order
          </h2>

          {cartItems < 1 && <p>You don't have any order ! </p>}
          <div className="  w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-2  mb-6 ">
            {cartItems.length >= 1 &&
              cartItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="border border-black rounded p-2 flex gap-4 "
                  >
                    <img
                      src={item.thumbnail}
                      alt="product"
                      className="w-20 h-20 object-cover shadow-sm  border rounded "
                    />

                    <div className="w-full flex flex-col justify-between items-start ">
                      <div className="flex items-start justify-between w-full">
                        <h3 className="capitalize font-medium ">
                          {item.title}
                        </h3>
                        <h3 className="capitalize font-semibold ">
                          ${item.price * item.quantite}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between w-full gap-10">
                        <div className="flex items-center justify-between border border-black rounded w-full h-full px-2">
                          <span
                            onClick={() => {
                              deleteOn(item, item.quantite);
                            }}
                          >
                            <FaMinus className="cursor-pointer" />
                          </span>
                          <span>{item.quantite}</span>
                          <span
                            onClick={() => {
                              addOn(item);
                            }}
                          >
                            <FaPlus className="cursor-pointer" />
                          </span>
                        </div>
                        <Button styles="bg-red-700 text-white border-red-700 duration-200 hover:bg-red-800">
                          <span
                            onClick={() => {
                              removeOn(item.id);
                            }}
                          >
                            remove
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {cartItems.length >= 1 && (
            <div className="border border-black rounded p-4 md:w-fit ">
              <div >
                Total Quantites <span className="text-lg font-semibold pl-4">{qty}</span>
              </div>
              <div>
                Total Prices <span className="text-lg font-semibold pl-4">${prices}</span>
              </div>
            </div>
          )}
        </div>

        <div className=" my-6 md:mb-10 lg:mb-12  text-xl  font-medium uppercase duration-200 hover:underline">
          <Link href="/#products">
            go to shop  {cartItems.length >= 1 && "more"}
          </Link>
        </div>

        <div className={`${cartItems < 1 && "hidden"}`}>
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-6">
            Credit Card Information
          </h2>

          <div className="grid grid-cols-9 gap-3">
            <input
              className="border p-2 px-4 rounded focus:outline-none w-full col-start-1 col-end-10"
              type="email"
              placeholder="Email address"
            />
            <input
              className="border p-2 px-4 rounded focus:outline-none w-full col-start-1 col-end-10"
              type="text"
              placeholder=" Name on  card"
            />
            <input
              className="border p-2 px-4 rounded focus:outline-none w-full col-start-1 col-end-10"
              type="number"
              placeholder="Card number"
            />
            <input
              className="border p-2 px-4 rounded focus:outline-none w-full col-start-1 col-end-7"
              type="number"
              placeholder="Expiration date"
            />
            <input
              className="border p-2 px-4 rounded focus:outline-none w-full col-start-7 col-end-10"
              type="number"
              placeholder="CVC"
            />
            <input
              className="border p-2 px-4 rounded focus:outline-none w-full col-start-1 col-end-10"
              type="text"
              placeholder=" Address"
            />

            <input
              className="border p-2 px-4 rounded focus:outline-none w-full col-start-1 col-end-4"
              type="text"
              placeholder="City"
            />
            <input
              className="border p-2 px-4 rounded focus:outline-none w-full col-start-4 col-end-7"
              type="text"
              placeholder="State"
            />
            <input
              className="border p-2 px-4 rounded focus:outline-none w-full col-start-7 col-end-10"
              type="number"
              placeholder="Zip code"
            />
            <div className=" col-start-1 col-end-10 flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-gray-500">
                Billing address is the same as shipping address
              </p>
            </div>
            <button className="border border-black  bg-black rounded uppercase text-white font-medium py-2 px-8 md:w-fit  col-start-1 col-end-10">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkout;
