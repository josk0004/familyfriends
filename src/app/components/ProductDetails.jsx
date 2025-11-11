"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductDetails = ({ category, brand, price, rating, availability }) => {
  const upperCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const router = useRouter();
  return (
    <div className="mx-6 mt-6 flex flex-wrap gap-2">
      <p
        className="cursor-pointer rounded-full bg-blue-300 px-3 py-2 text-sm text-blue-950"
        onClick={() => router.push(`/?category=${upperCategory}`)}
      >
        {upperCategory}
      </p>
      <p className="rounded-full bg-red-300 px-3 py-2 text-sm text-red-950">
        {brand ? brand : availability}
      </p>
      <p className="rounded-full bg-green-200 px-3 py-2 text-sm text-green-950">
        {price}$
      </p>
      <p className="rounded-full bg-yellow-300 px-3 py-2 text-sm text-yellow-950">
        {rating} ★
      </p>
    </div>
  );
};

export default ProductDetails;
