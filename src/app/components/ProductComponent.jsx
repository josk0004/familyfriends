import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import BuyButton from "./BuyButton";

const ProductComponent = async ({ params }) => {
    const { id } = await params;
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await data.json();
  return (
    <div className="m-0 p-0">
      <ProductImage
        title={product.title}
        favorite={false}
        category={product.category}
        price={product.price}
        img={product.images[0]}
        thumbnail={product.thumbnail}
      />
      <h2 className="text-darkgray mx-6 mt-3 text-2xl font-bold">
        {product.title}
      </h2>
      <ProductDetails
        category={product.category}
        price={product.price}
        brand={product.brand}
        rating={product.rating}
        availability={product.availabilityStatus}
      />
      <p className="text-darkgray mx-6 mt-4 mb-1.5">{product.description}</p>
      <p className="text-grayish mx-6 text-sm">
        Opdateret: {product.meta.updatedAt}
      </p>
      <BuyButton title={product.title} />
    </div>
  );
};

export default ProductComponent;
