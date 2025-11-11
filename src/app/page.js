import { Suspense } from "react";
import MainContainer from "./components/MainContainer";

export default function Home({ searchParams }) {
  return (
    <Suspense
      fallback={
        <div className="text-grayish mx-6 text-xl font-black">Loading...</div>
      }
    >
      <MainContainer searchParams={searchParams} />
    </Suspense>
  );
}
