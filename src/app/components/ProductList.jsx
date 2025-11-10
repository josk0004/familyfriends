import { Suspense } from "react";
import ProductCard from "./ProductCard";

const ProductList = async ({ category }) => {
  return (
    <Suspense fallback={<p>Loading products...</p>}>
      <FetchProducts category={category} />
    </Suspense>
  );
};

const FetchProducts = async ({ category }) => {
  let url = "https://dummyjson.com/products";

  if (category && category !== "All") {
    const normalizedCategory = category.toLowerCase();
    url = `https://dummyjson.com/products/category/${normalizedCategory}`;
  }

  const data = await fetch(url);
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
