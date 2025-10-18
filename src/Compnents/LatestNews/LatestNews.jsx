import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <section className="flex items-center gap-3 bg-base-200 p-4">
      <button className="btn btn-secondary p-5 text-lg font-normal text-white">Latest</button>
      <Marquee
        pauseOnHover
        autoFill
        speed={60}
        className="flex items-center gap-5 "
      >
        <p className="text-lg font-medium text-nowrap">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt
          quam dolorum neque, blanditiis inventore soluta vero totam id
          laboriosam?
        </p>
        <p className="text-lg font-medium text-nowrap">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt
          quam dolorum neque, blanditiis inventore soluta vero totam id
          laboriosam?
        </p>
      </Marquee>
    </section>
  );
};

export default LatestNews;
