"use client";
import Image from "next/image";
import { RiStarLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductImage = ({ title, favorite, thumbnail, img }) => {
  const router = useRouter();
  return (
    <div className="shadow-animal-card border-grayish mx-6 grid grid-cols-1 grid-rows-1 rounded-2xl border">
      <Image
        loading="eager"
        src={img}
        alt="Description of image"
        width={500}
        height={300}
        className="col-1 row-1 rounded-2xl"
      />
      {favorite ? (
        <RiStarFill className="col-1 row-1 mt-6 mr-6 h-8 w-8 cursor-pointer justify-self-end rounded-full bg-[#FEFEFE80] p-1 text-black" />
      ) : (
        <RiStarLine className="col-1 row-1 mt-6 mr-6 h-8 w-8 cursor-pointer justify-self-end rounded-full bg-[#FEFEFE80] p-1 text-black" />
      )}
      <RiArrowLeftSLine
        className="text-darkgray col-1 row-1 mt-6 ml-6 h-8 w-8 cursor-pointer justify-self-start rounded-full bg-[#F8F8F8] p-1"
        onClick={() => router.back()}
      />
      <div className="col-1 row-1 mb-6 ml-6 flex w-fit gap-2 self-end rounded-2xl bg-[#ffffff40] p-2 pr-4 backdrop-blur-xs">
        <Image
          loading="eager"
          src={thumbnail}
          alt="Description of image"
          width={32}
          height={32}
          className="rounded-lg"
        />
        <h2 className="text-sm">{title}</h2>
      </div>
    </div>
  );
};

export default ProductImage;
