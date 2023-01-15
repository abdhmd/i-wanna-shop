import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Button } from "../../components/Tools";
import { useState } from "react";
import { useStateContext } from "../../context/State";
import Link from "next/link";

const product = ({ product, products }) => {
  // Use Context ================== /
  const { addOn } = useStateContext();
  const handleBuyNow = () => {
    addOn(product);
  };
  // Get Categories ================== /
  const category = product.category;
  const categories = products.filter((p) => p.category === category);

  // Set Image Active =============== /
  const images = product.images.slice(0, product.images.length - 1);
  const [src, setSrc] = useState(product.thumbnail);
  const [border, setBorder] = useState("");
  const [active, setActive] = useState(null);
  const showImages = (image, i) => {
    setSrc(image);
    setActive(image);

    images[i] && setBorder("border-black");
  };

  return (
    <div>
      <div className="bg-white shadow-sm border  rounded-md p-4">
        <div className="grid  md:grid-cols-3 gap-4 items-start">
          <img
            src={src}
            alt={product.title}
            className="rounded border shadow-sm w-full h-52 object-contain duration-100"
          />
          <div className="md:col-span-2 ">
            <div className="flex  items-center gap-2">
              <span className="text-xs text-gray-600 font-medium">
                {product.rating}
              </span>
              <span className="flex text-[8px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
            </div>

            <h2 className="text-2xl font-semibold my-4">{product.title}</h2>
            <p className="text-zinc-700">{product.description}</p>
            <div className=" flex flex-col">
              <div>
                <div className="flex items-center gap-6 w-full my-4 text-xs">
                  price :
                  <span className="font-bold text-lg"> ${product.price}</span>
                </div>
              </div>
                <Button styles="bg-black text-white" >
                  <span
                    onClick={() => {
                      handleBuyNow();
                    }}
                  >
                    add to cart
                  </span>
                </Button>
               
              
            </div>
          </div>
        </div>
        <ul className="flex gap-2 my-4 ">
          {images.map((image, i) => {
            return (
              <li key={image}>
                <img
                  onMouseOver={() => {
                    showImages(image, i);
                  }}
                  src={image}
                  alt={product.title}
                  className={`w-10 h-10 border duration-100 ${
                    active === image && border
                  } rounded shadow-sm object-contain cursor-pointer`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Categories ==================== */}
      <div className="text-center my-6 md:my-8 lg:my-10">
        <h2 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold ">
          Products you may like
        </h2>
      </div>

      <div className="mb-4 md:mb-6 lg:mb-8">
        <ul className="grid grid-cols-2 lg:grid-cols-3 grid-rows-1   gap-2  ">
          {categories.map((product) => {
            return (
              <li
                onClick={() => {
                  setSrc(product.thumbnail);
                }}
                key={product.title}
                className="rounded overflow-hidden border  shadow-sm text-center p-2 "
              >
                <Link
                  href={`${product.id}`}
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
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;

  const paths = products.map((product) => ({
    params: {
      id: `${product.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const query = `https://dummyjson.com/products/${id}`;
  const resProducts = await fetch("https://dummyjson.com/products");
  const data = await resProducts.json();

  const res = await fetch(query);
  const product = await res.json();

  return {
    props: { product, products: data.products },
  };
};
export default product;
