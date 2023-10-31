const ShoeCard = ({ imgURL, changeBigShoe, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoe(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl
        ${
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1 flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4
    `}
      onClick={handleClick}
    >
      <img
        src={imgURL.thumbnail}
        alt="shoe collection"
        width={127}
        height={103}
        className="object-contain"
      />
    </div>
  );
};
export default ShoeCard;
