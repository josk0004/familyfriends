import SortingOption from "./SortingOption";
const SortingOptions = () => {
  return (
    <div className="sortingOptions flex w-full items-center justify-between gap-3 overflow-x-auto p-[0_1.5rem_1.5rem_1.5rem]">
      <SortingOption label="Alle" />
      <SortingOption label="Hunde" />
      <SortingOption label="Katte" />
      <SortingOption label="Kaniner" />
      <SortingOption label="Andre" />
    </div>
  );
};

export default SortingOptions;
