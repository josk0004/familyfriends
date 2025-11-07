const AdoptButton = ({ name }) => {
  return (
    <div className="mx-6">
      <button className="bg-perimore hover:bg-perimore/90 mx-auto mt-6 mb-4 w-full cursor-pointer rounded-full py-4 text-center font-bold text-white transition-all duration-200 ease-in-out">
        Adopter <span className="font-medium">{name}</span>
      </button>
    </div>
  );
};

export default AdoptButton;
