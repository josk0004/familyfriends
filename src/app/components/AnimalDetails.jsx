const AnimalDetails = ({ type, breed, age, gender }) => {
  return (
    <div className="mx-6 mt-6 flex gap-2">
      <p className="rounded-full bg-blue-300 px-3 py-2 text-sm text-blue-950">
        {type}
      </p>
      <p className="rounded-full bg-red-300 px-3 py-2 text-sm text-red-950">
        {gender}
      </p>
      <p className="rounded-full bg-green-200 px-3 py-2 text-sm text-green-950">
        {age}
      </p>
      <p className="rounded-full bg-yellow-300 px-3 py-2 text-sm text-yellow-950">
        {breed}
      </p>
    </div>
  );
};

export default AnimalDetails;
