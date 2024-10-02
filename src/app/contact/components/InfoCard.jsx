const InfoCard = ({ icon, title, content }) => {
  return (
    <div className="flex justify-start items-start gap-3 bg-primary_4 p-6 rounded-lg flex-1 text-primary w-full">
      {icon}
      <div className="flex flex-col justify-center items-start">
        <span className="text-xl">{title}</span>
        <span className="text-gray-800">{content}</span>
      </div>
    </div>
  );
};

export default InfoCard;
