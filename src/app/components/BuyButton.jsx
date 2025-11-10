const BuyButton = ({ title }) => {
  return (
    <div className="mx-6">
      <button className="bg-perimore hover:bg-perimore/90 mx-auto mt-6 mb-4 w-full cursor-pointer rounded-full py-4 text-center font-bold text-white transition-all duration-200 ease-in-out">
        Buy <span className="font-medium">{title}</span>
      </button>
    </div>
  );
};

export default BuyButton;
