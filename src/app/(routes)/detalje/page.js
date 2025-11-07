import AnimalImage from "@/app/components/AnimalImage";
import AnimalDetails from "@/app/components/AnimalDetails";
import AdoptButton from "@/app/components/AdobtButton";

export const metadata = {
  title: "Detalje — FamilyFriends",
};

// export async function generateMetadata({ params }) {
//   const id = params.id;
//   // optionally fetch item to build a better title
//   return { title: `Animal ${id} — FamilyFriends` };
// }

import Link from "next/link";
const detalje = () => {
  return (
    <div className="m-0 p-0">
      <AnimalImage name="Fluffy" favorite={true} breed="Persian" age="young" />
      <h2 className="text-darkgray mx-6 mt-3 text-2xl font-bold">Fluffy</h2>
      <AnimalDetails type="Cat" breed="Persian" age="2 years" gender="Female" />
      <p className="text-darkgray mx-6 mt-4 mb-1.5">
        Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde
        og er venlig over for andre dyr. På trods af sin hvide pels elsker den
        regn og vandpytter.
      </p>
      <p className="text-grayish mx-6 text-sm">Opdateret den 13. juli.</p>
      <AdoptButton name="Fluffy" />
    </div>
  );
};

export default detalje;
