import SortingOption from "./SortingOption";

const SortingOptions = ({ activeCategory }) => {
  return (
    <div className="sortingOptions flex w-full items-center justify-between gap-3 overflow-x-auto p-[0_1.5rem_1.5rem_1.5rem]">
      <SortingOption
        label="All"
        activeOption={activeCategory}
        img="https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp"
      />
      <SortingOption
        label="Beauty"
        activeOption={activeCategory}
        img="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
      />
      <SortingOption
        label="Furniture"
        activeOption={activeCategory}
        img="https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp"
      />
      <SortingOption
        label="Groceries"
        activeOption={activeCategory}
        img="https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
      />
      <SortingOption
        label="Fragrances"
        activeOption={activeCategory}
        img="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
      />
    </div>
  );
};

export default SortingOptions;
