import ProductImage from "@/app/components/ProductImage";
import ProductDetails from "@/app/components/ProductDetails";
import BuyButton from "@/app/components/BuyButton";
import { Suspense } from "react";

// export const metadata = {
//   title: "Detalje — FamilyFriends",
// };

export async function generateMetadata({ params }) {
  const { id } = await params;
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await data.json();
  return { title: `${product.title} — FamilyFriends` };
}

const FetchProduct = async ({ params }) => {
  "use cache";
  const { id } = await params;
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await data.json();
  return (
    <Suspense fallback={<p>Loading product details...</p>}>
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
    </Suspense>
  );
};

export default async function Detalje({ params }) {
  return <FetchProduct params={params} />;
}
