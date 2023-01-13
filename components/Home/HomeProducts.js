import { useState } from "react";
import { Section } from "../../components/Tools";

import HomeProductsItems from "./HomeProductsItems";
import HomeProductsSearch from "./HomeProductsSearch";

import { RiArrowLeftSLine } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";

const HomeProducts = ({ products, categories }) => {

  
  const [categoriesToggle, setCategoriesToggle] = useState(false);
  const [productsDetails, setProductsDetails] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const categoriesDetails = categories.slice(0, 5);

  const filterByCategory = (title) => {
    const filter = products.filter((product) => product.category === title);
    setProductsDetails(filter);
    setShowCategories(true);
  };

  return (
    <Section>
      <div className="text-center mb-6 md:mb-8 lg:mb-10">
        <h2 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold ">
          related products
        </h2>
      </div>

      <div className="grid  gap-2 md:gap-6  md:grid-cols-2   justify-between  items-center my-6 ">
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 h-full">
          <li
            onClick={() => {
              setShowCategories(false);
            }}
            className="border flex justify-center items-center px-2 capitalize border-black rounded h-full cursor-pointer font-medium py-2 text-sm"
          >
            <span className="pr-2">
              <CgMenuBoxed />
            </span>
            all products
          </li>
          <li
            onClick={() => {
              setCategoriesToggle(!categoriesToggle);
            }}
            className="border flex justify-center items-center px-2 capitalize border-black rounded h-full cursor-pointer font-medium py-2 text-sm"
          >
            <span className="pr-2">
              <BiCategory />
            </span>{" "}
            categories
          </li>
        </ul>

        {/* Search ====================================================== */}
        <HomeProductsSearch products={products} />
      </div>

      {/* Categorirs ====================================================== */}

      <div
        className={`fixed z-40 top-0 left-0 bg-white  w-full md:w-1/2 lg:w-1/3 md:border-r h-screen flex  flex-col justify-start duration-300 overflow-hidden px-4 ${
          !categoriesToggle && "w-0 -left-[200%] "
        }`}
      >
        <div
          className="bg-black text-white text-2xl w-10 h-11 flex justify-center items-center rounded cursor-pointer  mt-6 md:mt-8 lg:mt-10 "
          onClick={() => {
            setCategoriesToggle(!categoriesToggle);
          }}
        >
          <RiArrowLeftSLine />
        </div>
        <ul className="  flex flex-wrap gap-2 mt-10">
          {categoriesDetails.map((category) => {
            return (
              <li
                onClick={() => {
                  setCategoriesToggle(!categoriesToggle);
                  filterByCategory(category);
                }}
                key={category}
                className=" cursor-pointer border hover:border-black hover:bg-black hover:text-white duration-100 shadow-sm rounded w-fit py-2 px-3 text-xs font-medium capitalize"
              >
                {category.replace("-", " ")}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Products Items ====================================================== */}

      <HomeProductsItems
        productsDetails={productsDetails}
        products={products}
        showCategories={showCategories}
      />
    </Section>
  );
};

export default HomeProducts;
