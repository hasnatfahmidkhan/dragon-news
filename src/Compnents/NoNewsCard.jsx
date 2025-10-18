import { FaNewspaper, FaRedo } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { use } from "react";
import { LoadingContext } from "../Context/LoadingContext/LoadingContext";

const NoNewsCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { triggerLoader } = use(LoadingContext);

  const handleRefresh = () => {
    triggerLoader();
    navigate(`/category/${id}`);
  };

  const handleExploreCategories = () => {
    navigate("/");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="px-6 py-16 flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
            <FaNewspaper size={40} className="text-gray-400" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          No News Available
        </h2>

        <p className="text-gray-600 mb-2">
          There are currently no articles in this category.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Check back soon for the latest updates and stories.
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleRefresh}
            className="btn btn-outline btn-sm gap-2"
          >
            <FaRedo size={14} />
            Refresh
          </button>
          <button
            onClick={handleExploreCategories}
            className="btn btn-primary btn-sm"
          >
            Breaking News
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoNewsCard;
