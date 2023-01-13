import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../Tools";
import { useStateContext } from "../../context/State";
import { useState } from "react";

const CartProducts = () => {
  const { cartItems, deleteOn, removeOn, addOn } = useStateContext();

  

  return (
    <>
      <div
        className={` ${
          cartItems.length >= 1 && "hidden"
        } flex flex-col items-center justify-center w-full h-full`}
      >
        {cartItems.length < 1 && (
          <div className="flex flex-col items-center justify-center gap-6">
            <span className="uppercase font-medium  text-2xl text-zinc-700">
              your cart is empty
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 py-4 ">
        {cartItems.length >= 1 &&
            cartItems.map((item, i) => {
              return (
                <div
                  key={i}
                  className="border border-black rounded p-2 flex gap-4"
                >
                  <img
                    src={item.thumbnail}
                    alt="product"
                    className="w-20 h-20 object-cover shadow-sm  border rounded"
                  />

                  <div className="w-full flex flex-col justify-between items-start ">
                    <div className="flex items-start justify-between w-full">
                      <h3 className="capitalize font-medium ">{item.title}</h3>
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
    </>
  );
};

export default CartProducts;
