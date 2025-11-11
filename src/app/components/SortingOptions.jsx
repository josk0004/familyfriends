import SortingOption from "./SortingOption";

const FetchOptions = async ({ category }) => {
  let url = "https://dummyjson.com/products/categories";
  const data = await fetch(url);
  const options = await data.json();

  return options.map((option) => (
    <SortingOption
      label={option.name}
      activeOption={category}
      key={crypto.randomUUID()}
    />
  ));
};

const SortingOptions = ({ activeCategory }) => {
  return (
    <div className="sortingOptions flex w-full items-center justify-between gap-3 overflow-x-auto p-[0_1.5rem_1.5rem_1.5rem]">
      <SortingOption label="All" activeOption={activeCategory} />
      <FetchOptions category={activeCategory} />
    </div>
  );
};

export default SortingOptions;
