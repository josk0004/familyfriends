import SortingOptions from "../components/SortingOptions";
import ProductList from "./ProductList";

const MainContainer = async ({ searchParams }) => {
  const params = await searchParams;
  const category = params?.category || "All";
  return (
    <div className="m-0 p-0">
      <SortingOptions activeCategory={category} />
      <div className="columns-2 gap-4 px-6">
        <ProductList category={category} />
      </div>
    </div>
  );
};

export default MainContainer;
