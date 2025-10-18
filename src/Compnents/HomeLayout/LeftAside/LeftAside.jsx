import axios from "axios";
import Categories from "../../Categories/Categories";
import { Suspense, use } from "react";

const categoriesPromise = axios("/categories.json");
const LeftAside = () => {
  const { data: categories } = use(categoriesPromise);
  return (
    <div>
      <section>
        <h2 className="font-semibold text-2xl mb-5 flex gap-1">
          All Category{" "}
          <span className="self-end text-sm ">({categories.length})</span>
        </h2>
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <Categories categories={categories} />
        </Suspense>
      </section>
    </div>
  );
};

export default LeftAside;
