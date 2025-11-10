import SortingOptions from "../components/SortingOptions";
import Image from "next/image";
import Link from "next/link";
import ProductList from "./ProductList";

const MainContainer = () => {
  return (
    <div className="m-0 p-0">
      <SortingOptions />
      <div className="columns-2 gap-4 px-6">
        <ProductList />
      </div>
    </div>
  );
};

export default MainContainer;
