import ProductComponent from "@/app/components/ProductComponent";
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

export default async function Detalje({ params }) {
  return (
    <Suspense fallback={<p>Loading product details...</p>}>
      <ProductComponent params={params} />
    </Suspense>
  );
}
