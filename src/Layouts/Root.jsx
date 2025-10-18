import { Outlet, useLocation } from "react-router";
import Header from "../Compnents/Header/Header";
import Container from "../Compnents/Container/Container";
import LatestNews from "../Compnents/LatestNews/LatestNews";
import Navbar from "../Compnents/Navbar/Navbar";
import LeftAside from "../Compnents/HomeLayout/LeftAside/LeftAside";
import RightAside from "../Compnents/HomeLayout/RightAside/RightAside";
import { use, useEffect } from "react";
import Loader from "../Compnents/Loader/Loader";
import { LoadingContext } from "../Context/LoadingContext/LoadingContext";

const Root = () => {
  const location = useLocation();
  const { loading, setLoading } = use(LoadingContext);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [location.pathname, setLoading]);
  return (
    <div>
      <header>
        <Header />
        <Container className={"py-8"}>
          <LatestNews />
          <Navbar />
        </Container>
      </header>
      <Container>
        <main className="grid grid-cols-12 gap-7">
          <aside className="col-span-3 sticky top-2 h-fit">
            <LeftAside />
          </aside>
          <section className="main col-span-6">
            <h2 className="font-semibold text-2xl mb-5">Dragon News Home</h2>
            {loading ? <Loader className={"h-1/5"} /> : <Outlet />}
          </section>
          <aside className="col-span-3 sticky top-2 h-fit">
            <RightAside />
          </aside>
        </main>
      </Container>
    </div>
  );
};

export default Root;
