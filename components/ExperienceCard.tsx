import { FiClock } from 'react-icons/fi';

const ExperienceCard = ({ title, date }) => {
  return (
    <div
      className="p-6 rounded-xl transition-all duration-300 
                 shadow-[5px_5px_15px_rgb(209,213,219),_-5px_-5px_15px_white] 
                 bg-[linear-gradient(145deg,_#ffffff,_#f3f4f6)] 
                 hover:bg-[linear-gradient(145deg,_#f0f0f0,_#e5e7eb)] 
                 hover:scale-[1.01] flex flex-col justify-between h-full"
    >
      <h3 className="font-semibold text-lg text-gray-800 mb-4 leading-snug">
        {title}
      </h3>
      <div className="flex items-center text-sm text-gray-600">
        <FiClock className="mr-2 text-[16px]" />
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
