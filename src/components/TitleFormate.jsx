const TitleFormate = ({upperTxt,belowTxt}) => {
  return (
    <h3 className=" text-4xl font-semibold">
      <span className="text-[#19293A]">{upperTxt}</span> <br />
      <span className="text-[#506473]">{belowTxt}</span>{" "}
    </h3>
  );
};

export default TitleFormate;
