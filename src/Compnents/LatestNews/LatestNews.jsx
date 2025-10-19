import axios from "axios";
import { use, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const newsPromise = axios("/news.json");
const LatestNews = () => {
  const { data } = use(newsPromise);
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    const trendingNews = data
      .filter((d) => d.others?.is_trending)
      .map((news) => news.title);
    setTrending(trendingNews);
  }, [data]);

  return (
    <section className="flex items-center gap-3 bg-base-200 p-4">
      <button className="btn btn-secondary p-5 text-lg font-normal text-white">
        Latest
      </button>
      <Marquee pauseOnHover autoFill speed={60}>
        {trending &&
          trending.map((title) => (
            <p className="text-lg font-medium text-nowrap mr-2">{title}.  </p>
          ))}
      </Marquee>
    </section>
  );
};

export default LatestNews;
