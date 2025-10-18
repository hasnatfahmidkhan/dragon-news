import { format } from "date-fns";
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, rating, total_view, tags, details } =
    news;

  const formatViews = (views) => {
    return views.toLocaleString();
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Author Header */}
      <div className="px-6 py-4 bg-base-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm text-gray-800">
                {author.name}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(author.published_date).toISOString().split("T")[0]}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <CiBookmark
              size={24}
              className="cursor-pointer hover:text-accent-content"
            />
            <IoShareSocialOutline
              size={24}
              className="cursor-pointer hover:text-accent-content"
            />
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-6 pt-4 pb-3">
        <h2 className="text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>

      {/* Thumbnail Image */}
      <div className="px-6 pb-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>

      {/* Tags and Date */}
      <div className="px-6 pb-4">
        <p className="text-xs text-gray-600 mb-3">
          {format(author.published_date, "eeee, MMMM MM, yyyy")} | Tag Cloud
          Tags: <span className="font-medium">{tags.join(", ")}</span>
        </p>
      </div>

      {/* Description */}
      <div className="px-6 pb-4">
        <p className="text-sm text-gray-700 line-clamp-3">{details}</p>
      </div>

      {/* Read More Link */}
      <div className="px-6 pb-4">
        <Link
          to={"details-News"}
          className="text-orange-500 text-sm font-semibold hover:text-orange-600 transition-colors"
        >
          Read More
        </Link>
      </div>

      {/* Rating and Views Footer */}
      <div className="px-6 py-4 bg-gray-50 flex items-center justify-between border-t border-gray-100">
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {Array.from({ length: rating.number }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < rating.number ? "text-orange-400" : "text-gray-300"
                }
                size={16}
              />
            ))}
          </div>
          <span className="ml-2 font-semibold text-gray-800 text-sm">
            {rating.number}.0
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye size={16} />
          <span className="text-sm font-medium">{formatViews(total_view)}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
