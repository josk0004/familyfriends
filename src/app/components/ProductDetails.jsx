const ProductDetails = ({ category, brand, price, rating, availability }) => {
  return (
    <div className="mx-6 mt-6 flex flex-wrap gap-2">
      <p className="rounded-full bg-blue-300 px-3 py-2 text-sm text-blue-950">
        {category}
      </p>
      <p className="rounded-full bg-red-300 px-3 py-2 text-sm text-red-950">
        {brand ? brand : availability}
      </p>
      <p className="rounded-full bg-green-200 px-3 py-2 text-sm text-green-950">
        {price}$
      </p>
      <p className="rounded-full bg-yellow-300 px-3 py-2 text-sm text-yellow-950">
        {rating}
      </p>
    </div>
  );
};

export default ProductDetails;
