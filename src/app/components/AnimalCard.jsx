import Image from "next/image";
import { RiStarLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import Link from "next/link";

const AnimalCard = ({ name, age, breed, favorite }) => {
  return (
    <div className="shadow-animal-card mb-4 break-inside-avoid rounded-2xl">
      <div className="grid grid-cols-1 grid-rows-1">
        <Link href={`/detalje`} passHref className="col-1 row-1">
          <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            alt="Description of image"
            width={500}
            height={300}
            className="col-1 row-1 rounded-2xl"
          />
        </Link>
        {favorite ? (
          <RiStarFill className="col-1 row-1 mt-2 mr-2 h-6 w-6 cursor-pointer justify-self-end rounded-full bg-[#FEFEFE80] p-1 text-white" />
        ) : (
          <RiStarLine className="col-1 row-1 mt-2 mr-2 h-6 w-6 cursor-pointer justify-self-end rounded-full bg-[#FEFEFE80] p-1 text-white" />
        )}
      </div>
      <Link href={`/detalje`} passHref>
        <div className="p-2 pb-3">
          <div className="mb-1 flex justify-between">
            <h2 className="text-darkgray text-sm font-bold">{name}</h2>
            <p className="text-grayish text-sm font-medium">{age}</p>
          </div>
          <p className="text-grayish text-sm font-medium">{breed}</p>
        </div>
      </Link>
    </div>
  );
};

export default AnimalCard;
