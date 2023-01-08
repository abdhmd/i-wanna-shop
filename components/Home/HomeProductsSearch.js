import { useState } from "react";

const HomeProductsSearch = ({ products }) => {
  const title = products.map((product) => product.title);

  const [productsSearch, setProductsSearch] = useState([]);

  const setValueSearch = (e) => {
    e.preventDefault();

    const findValue = e.target[0].value;
    const valueToLowerCase = findValue.toLowerCase();

    const titles = [];

    for (let i = 0; i <= title.length - 1; i++) {
      const result =
        valueToLowerCase != ""
          ? title[i].toLowerCase().search(valueToLowerCase)
          : -1;

      result === -1 ? titles.splice() : titles.push(title[i]);
    }

    titles != [] &&
      setProductsSearch(
        titles.map((title) =>
          products.filter((product) => product.title === title)
        )
      );
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
      <div>
        {productsSearch != [] &&
          productsSearch.map((products) =>
            products.map((product) => {
              return <p key={product.title}>{product.title}</p>;
            })
          )}
      </div>
    </div>
  );
};

export default HomeProductsSearch;
