import PhoneStuff from "../components/PhoneStuff";
import SortingOptions from "../components/SortingOptions";
import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";

const MainContainer = () => {
  return (
    <div className="m-0 p-0">
      <SortingOptions />
      <Image
        loading="eager"
        src="https://placecats.com/neo/300/200"
        alt="Description of image"
        width={500}
        height={300}
      />
      <Image
        loading="eager"
        src="https://placecats.com/neo/300/200"
        alt="Description of image"
        width={500}
        height={300}
      />
      <Image
        loading="eager"
        src="https://placecats.com/neo/300/200"
        alt="Description of image"
        width={500}
        height={300}
      />
      <Image
        loading="eager"
        src="https://placecats.com/neo/300/200"
        alt="Description of image"
        width={500}
        height={300}
      />
      <Image
        loading="eager"
        src="https://placecats.com/neo/300/200"
        alt="Description of image"
        width={500}
        height={300}
      />
      <Link href="/detalje">Go to Detalje Page</Link>
    </div>
  );
};

export default MainContainer;
