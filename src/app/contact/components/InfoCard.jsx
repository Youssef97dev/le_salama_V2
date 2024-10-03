const InfoCard = ({ icon, title, content }) => {
  return (
    <div className="flex w-full lg:w-fit flex-grow justify-start items-start gap-3 bg-primary_4 p-6 rounded-lg  text-primary ">
      {icon}
      <div className="flex flex-col justify-center items-start">
        <span className="text-xl">{title}</span>
        <span className="text-gray-800 break-all">{content}</span>
      </div>
    </div>
  );
};

export default InfoCard;
