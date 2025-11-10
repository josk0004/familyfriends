import { Suspense } from "react";
import MainContainer from "./components/MainContainer";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "All";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContainer category={category} />
    </Suspense>
  );
}
