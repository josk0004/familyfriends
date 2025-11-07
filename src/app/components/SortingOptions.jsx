import SortingOption from "./SortingOption";
const SortingOptions = () => {
  return (
    <div className="sortingOptions flex w-full items-center justify-between gap-3 overflow-x-auto p-[0_1.5rem_1.5rem_1.5rem]">
      <SortingOption label="Alle" active={true} />
      <SortingOption label="Hunde" active={false} />
      <SortingOption label="Katte" active={false} />
      <SortingOption label="Kaniner" active={false} />
      <SortingOption label="Andre" active={false} />
    </div>
  );
};

export default SortingOptions;
