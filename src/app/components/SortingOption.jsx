const SortingOption = ({ label }) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-full bg-red-300 p-[10px_24px_10px_10px]">
      <div className="h-8 w-8 rounded-full bg-white"></div>
      <p>{label}</p>
    </div>
  );
};

export default SortingOption;
