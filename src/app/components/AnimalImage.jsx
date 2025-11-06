import Image from "next/image";
import { RiStarLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import Link from "next/link";

const AnimalImage = ({ name, favorite, breed, age }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 px-6">
      <Image
        loading="eager"
        src="https://placecats.com/neo/300/300"
        alt="Description of image"
        width={500}
        height={300}
        className="col-1 row-1 rounded-2xl"
      />
      {favorite ? (
        <RiStarFill className="col-1 row-1 mt-6 mr-6 h-8 w-8 cursor-pointer justify-self-end rounded-full bg-[#FEFEFE80] p-1 text-white" />
      ) : (
        <RiStarLine className="col-1 row-1 mt-6 mr-6 h-8 w-8 cursor-pointer justify-self-end rounded-full bg-[#FEFEFE80] p-1 text-white" />
      )}
      <Link href="/" className="col-1 row-1 mt-6 ml-6 justify-self-start">
        <RiArrowLeftSLine className="text-darkgray h-8 w-8 rounded-full bg-[#F8F8F8] p-1" />
      </Link>
      <div className="col-1 row-1 mb-6 ml-6 flex w-fit gap-2 self-end rounded-2xl bg-[#ffffff40] p-2 pr-4 backdrop-blur-xs">
        <Image
          loading="eager"
          src="https://placecats.com/neo/300/300"
          alt="Description of image"
          width={32}
          height={32}
          className="rounded-lg"
        />
        <h2 className="text-sm text-white">{name}</h2>
      </div>
    </div>
  );
};

export default AnimalImage;
