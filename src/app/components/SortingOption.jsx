"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SortingOption = ({ label, activeOption, img }) => {
  const isActive = activeOption === label;
  const href = label === "All" ? "/" : `/?category=${label}`;
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(href);
      }}
      className={`transition-color flex shrink-0 cursor-pointer items-center gap-2 rounded-full p-[10px_24px_10px_10px] duration-200 ease-in-out ${isActive ? "border-none bg-red-300 hover:bg-red-200" : "border-grayish border hover:bg-gray-100"}`}
    >
      <div className="h-8 w-8 rounded-full bg-linear-to-tr from-red-500 via-pink-500 to-orange-500">
        {/* <Image
          loading="eager"
          src={img}
          alt={label}
          width={32}
          height={32}
          className="rounded-full object-cover"
        /> */}
      </div>
      <p>{label}</p>
    </div>
  );
};

export default SortingOption;
