import Image from "next/image";
const SortingOption = ({ label, active }) => {
  return (
    <div
      className={`flex cursor-pointer items-center gap-2 rounded-full p-[10px_24px_10px_10px] ${active ? "border-none bg-red-300" : "border-grayish border"}`}
    >
      <div className="h-8 w-8 rounded-full">
        <Image
          loading="eager"
          src="https://placecats.com/neo/300/300"
          alt="Description of image"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default SortingOption;
