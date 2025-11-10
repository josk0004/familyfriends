import Image from "next/image";
import Link from "next/link";

const SortingOption = ({ label, activeOption, img }) => {
  const isActive = activeOption === label;
  const href = label === "All" ? "/" : `/?category=${label}`;

  return (
    <Link
      href={href}
      className={`transition-color flex cursor-pointer items-center gap-2 rounded-full p-[10px_24px_10px_10px] duration-200 ease-in-out ${isActive ? "border-none bg-red-300" : "border-grayish border"}`}
    >
      <div className="h-8 w-8 rounded-full">
        <Image
          loading="eager"
          src={img}
          alt={label}
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>
      <p>{label}</p>
    </Link>
  );
};

export default SortingOption;
