import { RiHome9Line } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import { RiMessage2Line } from "react-icons/ri";
import { RiAccountCircle2Line } from "react-icons/ri";

const FooterNav = () => {
  return (
    <div>
      <div className="z-10 flex w-full items-center justify-around border-t-2 border-gray-200 px-6 pt-3 pb-6">
        <RiHome9Line
          size={24}
          fill="var(--color-perimore)"
          className="cursor-pointer"
        />
        <RiStarLine
          size={24}
          fill="var(--color-grayish)"
          className="cursor-pointer"
        />
        <RiMessage2Line
          size={24}
          fill="var(--color-grayish)"
          className="cursor-pointer"
        />
        <RiAccountCircle2Line
          size={24}
          fill="var(--color-grayish)"
          className="cursor-pointer"
        />
      </div>
      <div className="mx-auto mb-2 h-1 w-32 rounded-full bg-black"></div>
    </div>
  );
};

export default FooterNav;
