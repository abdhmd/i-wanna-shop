import Link from "next/link";
import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const HomeProductsSearch = ({ products }) => {
  const title = products.map((product) => product.title);

  const [productsSearch, setProductsSearch] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [valueResult, setValueResult] = useState("");
  const [note, setNote] = useState(false);

  const setValueSearch = (e) => {
    e.preventDefault();
    const findValue = e.target[0].value;

    findValue.length <= 2 ? setNote(true) : setNote(false);

    setValueResult(findValue);
    const valueToLowerCase = findValue.toLowerCase();

    const titles = [];

    for (let i = 0; i <= title.length - 1; i++) {
      const result =
        valueToLowerCase != ""
          ? title[i].toLowerCase().search(valueToLowerCase)
          : -1;
      result === -1 ? titles.splice() : titles.push(title[i]);
    }

    if (titles != []) {
      setProductsSearch(
        titles.map((title) =>
          products.filter((product) => product.title === title)
        )
      );
      setShowSearch(!showSearch);
    }
  };

  return (
    <div>
      <form className="flex gap-2" onSubmit={setValueSearch}>
        <input
          type="text"
          placeholder="Type to search"
          className="border border-black w-[100%] rounded pl-4 focus:outline-none "
        />
        <button className="bg-black text-white px-6 py-2  border border-black   text-sm font-semibold uppercase rounded  w-fit">
          search
        </button>
      </form>
      <div
        className={`fixed flex flex-col gap-4 px-4 md:px-12 lg:px-32 bg-zinc-50 z-50  overflow-x-hidden w-[100%] h-full top-0 left-0  ${
          !showSearch && "w-0 -left-[100%]"
        }`}
      >
        <div
          className="bg-black text-white text-2xl w-10 h-11 flex justify-center items-center rounded cursor-pointer  mt-6 md:mt-8 lg:mt-10 "
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          <RiArrowLeftSLine />
        </div>
        <div className="capitalize text-xl ">
          result of :{" "}
          <span className="font-medium text-2xl">{valueResult}</span>
        </div>
        <ul className=" grid grid-cols-2 lg:grid-cols-3 grid-rows-1   gap-2  my-6  ">
          {note && (
            <p className={` ${!note && "hidden"} text-red-600  col-span-2`}>
              Please enter at least 3 characters to search...
            </p>
          )}
          {productsSearch.length < 1 && (
            <p className={`${note && "hidden"} text-zinc-600 col-span-2`}>
              Nothing to show ...!
            </p>
          )}
          {productsSearch.map((item) =>
            item.map((product) => {
              return (
                <li
                  key={product.title}
                  className={`${
                    note && "hidden"
                  } rounded overflow-hidden border  shadow-sm text-center p-2 `}
                >
                  <Link
                    href={`product/${product.id}`}
                    className="flex flex-col justify-between"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className=" object-cover w-full h-32 lg:h-40 rounded shadow-sm"
                    />
                    <div className=" w-full">
                      <h3 className="text-sm font-medium my-2">
                        {product.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-semibold">
                          ${product.price}
                        </p>
                        <span className="text-xs font-medium flex gap-1 items-center">
                          <FaStar />
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomeProductsSearch;
