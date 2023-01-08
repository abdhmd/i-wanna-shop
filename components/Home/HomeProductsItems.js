import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const HomeProductsItems = ({ products, productsDetails, showCategories }) => {
  const productsLength = products.length;
  let sliceNumber = 6;
  const [displayedProducts, setDisplayedProducts] = useState(
    products.slice(0, sliceNumber)
  );

  const Products = !showCategories ? displayedProducts : productsDetails;

  productsLength < sliceNumber && displayedProducts === products;
  const pageNumber = [];
  const quotientDivision = productsLength / sliceNumber;
  const remainderDivision = productsLength % sliceNumber;

  if ((productsLength > sliceNumber) & (remainderDivision === 0)) {
    for (let i = 1; i <= productsLength / sliceNumber; i++) {
      pageNumber.push(i);
    }
  }

  const changePage = (number) => {
    setDisplayedProducts(
      products.slice(
        (productsLength / quotientDivision) * (number - 1), // 10
        (productsLength / quotientDivision) * number
      )
    );
  };

  return (
    <div>
      <ul
        className={`${
          Products === productsDetails && "hidden"
        }   flex  gap-2 justify-center items-center my-4 `}
      >
        {pageNumber.map((number, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                changePage(number);
              }}
              className="w-10 h-10 font-semibold border border-black rounded flex justify-center items-center cursor-pointer"
            >
              {number}
            </li>
          );
        })}
      </ul>
      <ul className="grid grid-cols-2 lg:grid-cols-3 grid-rows-1   gap-2  ">
        {Products.map((product) => {
          return (
            <li
              key={product.title}
              className="rounded overflow-hidden border  shadow-sm text-center p-2 "
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
                  <h3 className="text-sm font-medium my-2">{product.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">${product.price}</p>
                    <span className="text-xs font-medium flex gap-1 items-center">
                      <FaStar />
                      {product.rating}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeProductsItems;
