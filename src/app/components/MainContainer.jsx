import SortingOptions from "../components/SortingOptions";
import Image from "next/image";
import Link from "next/link";
import AnimalCard from "./AnimalCard";

const MainContainer = () => {
  return (
    <div className="m-0 p-0">
      <SortingOptions />
      <div className="columns-2 gap-4 px-6">
        <AnimalCard
          name={"Alfred"}
          age={"young"}
          breed={"Lorem ipsum dolor sit amet"}
          favorite={true}
        />
        <AnimalCard
          name={"Bella"}
          age={"adult"}
          breed={"Persian"}
          favorite={false}
        />
        <AnimalCard
          name={"Alfred"}
          age={"young"}
          breed={"Siamese"}
          favorite={false}
        />
        <AnimalCard
          name={"Bella"}
          age={"adult"}
          breed={"Lorem ipsum dolor sit amet"}
          favorite={false}
        />
        <AnimalCard
          name={"Alfred"}
          age={"young"}
          breed={"Lorem ipsum dolor sit amet"}
          favorite={true}
        />
        <AnimalCard
          name={"Bella"}
          age={"adult"}
          breed={"Persian"}
          favorite={false}
        />
        <AnimalCard
          name={"Alfred"}
          age={"young"}
          breed={"Siamese"}
          favorite={false}
        />
        <AnimalCard
          name={"Bella"}
          age={"adult"}
          breed={"Lorem ipsum dolor sit amet"}
          favorite={false}
        />
        <AnimalCard
          name={"Alfred"}
          age={"young"}
          breed={"Lorem ipsum dolor sit amet"}
          favorite={true}
        />
        <AnimalCard
          name={"Bella"}
          age={"adult"}
          breed={"Persian"}
          favorite={false}
        />
        <AnimalCard
          name={"Alfred"}
          age={"young"}
          breed={"Siamese"}
          favorite={false}
        />
        <AnimalCard
          name={"Bella"}
          age={"adult"}
          breed={"Lorem ipsum dolor sit amet"}
          favorite={false}
        />
      </div>
    </div>
  );
};

export default MainContainer;
