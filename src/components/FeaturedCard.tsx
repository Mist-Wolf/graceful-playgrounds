interface FeaturedCardProps {
  image: string;
  date: string;
  title: string;
  author: string;
}

const FeaturedCard = ({ image, date, title, author }: FeaturedCardProps) => {
  return (
    <div className="group w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="relative overflow-hidden h-52">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <i className="fa fa-calendar text-orange-600"></i>
          <h5 className="text-sm font-medium text-gray-500">{date}</h5>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{title}</h3>
        <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
          <i className="fa fa-user-circle text-gray-400"></i>
          <h5 className="text-sm text-gray-600">{author}</h5>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
