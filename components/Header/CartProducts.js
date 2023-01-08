import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../Tools";
const CartProducts = () => {
  return (
    <div className="flex flex-col  justify-between h-full py-6 md:py-8 lg:py-10">
      <div className="  grid  gap-4">
        <div className="flex  border border-black gap-2 p-2 rounded">
          <div className="w-14 h-14 bg-gray-300 rounded shadow-sm"></div>
          <div>
            <div>
              <div className="flex  items-center gap-2">
                <span className="text-xs text-gray-600 font-medium">4.5</span>
                <span className="flex text-[8px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </span>
              </div>
              <h3 className="text-xl capitalize font-semibold mb-2">
                mackbook pro
              </h3>
            </div>
            <div className="flex items-center  gap-2 h-7 ">
              <span className="text-xs font-bold">$1700</span>
              <div className="flex h-full justify-center items-center gap-2 px-2 text-[10px] border border-black rounded ">
                <FaMinus />
                <span className="font-bold">01</span>
                <FaPlus />
              </div>
              <button className="bg-black text-white h-full text-xs font-medium uppercase px-3 rounded ">
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center uppercase font-semibold hidden">
        <Link href="/"> show all your carts</Link>
      </div>
      <div className="flex flex-col items-center  gap-2">
        <div className=" flex  justify-center gap-2 border border-black rounded py-2  capitalize text-sm font-medium text-zinc-800 w-full text-center">
          <div>
            total price : <span className="font-bold text-black">$1700</span> 
          </div>
          <div>
            products : <span className="font-bold text-black">01</span>
          </div>
        </div>
        <Button styles="text-white bg-black !w-full">
          <Link href="/">buy now</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartProducts;
