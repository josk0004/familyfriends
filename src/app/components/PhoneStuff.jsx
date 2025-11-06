import { IoMdStats } from "react-icons/io";
import { IoIosBatteryFull } from "react-icons/io";
import { IoIosWifi } from "react-icons/io";

const PhoneStuff = () => {
  return (
    <div className="flex h-fit w-full items-center justify-between bg-gray-100 px-6 py-3">
      <p className="text-sm font-semibold">9:41</p>
      <div className="flex items-center gap-2">
        <IoMdStats />
        <IoIosWifi />
        <IoIosBatteryFull />
      </div>
    </div>
  );
};

export default PhoneStuff;
