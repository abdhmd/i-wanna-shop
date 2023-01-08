import { Hero, HomeProducts } from "../components/Home";
const Home = ({ products ,categories}) => {
  return (
    <section>
      <Hero products={products} />
      <HomeProducts  products={products} categories={categories}/>
    </section>
  );
};

export async function getStaticProps() {
  const productsDetails = await fetch("https://dummyjson.com/products");
  const productsData = await productsDetails.json();

  const categoriesDetails = await fetch(
    "https://dummyjson.com/products/categories"
  );
  const categories = await categoriesDetails.json();

  return {
    props: {
      products: productsData.products,
      categories,
    },
  };
}

export default Home;
