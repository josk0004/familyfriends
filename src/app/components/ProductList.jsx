import { Suspense } from "react";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  return (
    <Suspense fallback={<p>Loading products...</p>}>
      <FetchProducts />
    </Suspense>
  );
};

const FetchProducts = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const { products } = await data.json();

  return products.map((product) => (
    <ProductCard
      title={product.title}
      price={product.price}
      category={product.category}
      key={product.id}
      id={product.id}
      img={product.thumbnail}
      favorite={false}
    />
  ));
};

export default ProductList;
