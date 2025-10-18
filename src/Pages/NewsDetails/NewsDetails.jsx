import Header from "../../Compnents/Header/Header";
import Container from "../../Compnents/Container/Container";
import RightAside from "../../Compnents/HomeLayout/RightAside/RightAside";
import NewsDetailsCard from "../../Compnents/NewsDetailsCard/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState(null);
  useEffect(() => {
    const newsDetails = data.find((d) => d.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div>
      <header>
        <Header />
      </header>
      <Container>
        <main className="grid grid-cols-12 gap-7 py-5">
          <section className="main col-span-9">
            <h2 className="font-semibold text-2xl mb-5">News Details</h2>
            <NewsDetailsCard news={news} />
          </section>

          <aside className="col-span-3 sticky top-2 h-fit">
            <RightAside />
          </aside>
        </main>
      </Container>
    </div>
  );
};

export default NewsDetails;
