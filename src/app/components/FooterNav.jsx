import { RiHome9Line } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import { RiMessage2Line } from "react-icons/ri";
import { RiAccountCircle2Line } from "react-icons/ri";

const FooterNav = () => {
  return (
    <div className="z-10 flex w-full items-center justify-around border-t-2 border-gray-200 p-6">
      <RiHome9Line size={24} fill="var(--color-perimore)" />
      <RiStarLine size={24} fill="var(--color-grayish)" />
      <RiMessage2Line size={24} fill="var(--color-grayish)" />
      <RiAccountCircle2Line size={24} fill="var(--color-grayish)" />
    </div>
  );
};

export default FooterNav;
