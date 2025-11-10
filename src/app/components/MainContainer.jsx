import SortingOptions from "../components/SortingOptions";
import ProductList from "./ProductList";

const MainContainer = ({ category }) => {
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
