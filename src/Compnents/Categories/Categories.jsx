import { NavLink } from "react-router";
const Categories = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
    
      {categories.map((category) => (
        <NavLink
          id="category"
          to={`category/${category.id}`}
          className="btn w-full text-lg border-none bg-transparent shadow-none text-accent-content p-6 hover:bg-base-300"
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
