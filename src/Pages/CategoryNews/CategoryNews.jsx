import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Compnents/NewsCard/NewsCard";
import { useEffect, useState } from "react";
import NoNewsCard from "../../Compnents/NoNewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const { data } = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == 0) {
      setCategoryNews(data);
      return;
    } else if (id == 1) {
      const filteredNews = data.filter((news) => news?.others?.is_today_pick);
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
      return;
    }
  }, [id, data]);

  return (
    <div>
      <div className="space-y-5">
        {categoryNews.length > 0 ? (
          categoryNews.map((news) => <NewsCard key={news.id} news={news} />)
        ) : (
          <NoNewsCard />
        )}
      </div>
    </div>
  );
};

export default CategoryNews;
