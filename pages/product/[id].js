import { FaStar, FaStarHalfAlt, FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../../components/Tools";

const product = ({ product }) => {
  const images = product.images.slice(0, product.images.length - 1);
  return (
    <div className="bg-white shadow-sm border  rounded-md p-4">
      <div>
        <img src={product.thumbnail} alt={product.title} className="rounded" />
        <div>
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

          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="bg-red-300 flex">
            <div>
              <div>
                price :<span> ${product.price}</span>
              </div>
              <div >
                <span>
                  <FaMinus />
                </span>
                <span>01</span>
                <span>
                  <FaPlus />
                </span>
              </div>
            </div>
            <Button styles="bg-black text-white">add to cart </Button>
          </div>
        </div>
      </div>
      <ul className="flex gap-2 my-4 ">
        {images.map((image) => {
          return (
            <img
              key={image}
              src={image}
              alt={product.title}
              className="w-10 h-10 border rounded shadow-sm object-contain cursor-pointer"
            />
          );
        })}
      </ul>
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

  const res = await fetch(query);
  const product = await res.json();

  return {
    props: { product },
  };
};
export default product;
