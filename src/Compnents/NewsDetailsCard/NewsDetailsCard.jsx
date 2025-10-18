import {
  FaStar,
  FaEye,
  FaBookmark,
  FaShare,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import Loader from "../Loader/Loader";
import { format } from "date-fns";

const NewsDetailsCard = ({ news }) => {
  const navigate = useNavigate();

  if (!news) {
    return (
      <div className="text-center py-10 h-full">
        <Loader />
      </div>
    );
  }

  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    tags,
    category_id,
  } = news;

  const formatViews = (views) => {
    return views.toLocaleString();
  };

  // scroll to top whenever route change
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Featured Image */}
      <div className="w-full h-96 overflow-hidden">
        <img
          src={image_url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-500">
              {format(author.published_date, "eeee, MMMM MM, yyyy")}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FaBookmark className="text-gray-400 text-lg" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FaShare className="text-gray-400 text-lg" />
            </button>
          </div>
        </div>

        {/* Article Details */}
        <div className="my-8">
          <p className="text-gray-700 leading-relaxed text-base">{details}</p>
        </div>

        {/* Tags */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Rating and Views Footer */}
        <div className="flex items-center justify-between py-6 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < rating.number ? "text-orange-400" : "text-gray-300"
                  }
                  size={16}
                />
              ))}
            </div>
            <span className="ml-2 font-semibold text-gray-800">
              {rating.number}.0
            </span>
            {rating.badge && (
              <span className="ml-3 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                {rating.badge.toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye size={16} />
            <span className="font-medium">{formatViews(total_view)}</span>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate(`/category/${category_id}`)}
            className="btn btn-secondary font-normal gap-2 w-fit"
          >
            <FaArrowLeft size={14} />
            All news in this category
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
