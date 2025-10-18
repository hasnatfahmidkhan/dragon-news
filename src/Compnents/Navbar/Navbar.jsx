import { NavLink } from "react-router";
import user from "../../assets/user.png";
const Navbar = () => {
  const links = (
    <>
      <li className="hover:text-black hover:underline">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="hover:text-black hover:underline">
        <NavLink to={"about"}>About</NavLink>
      </li>
      <li className="hover:text-black hover:underline">
        <NavLink to={"career"}>Career</NavLink>
      </li>
    </>
  );
  return (
    <nav className="flex items-center justify-between py-6">
      <div></div>
      <div>
        <ul
          id="navlinks"
          className="flex items-center gap-5 text-accent-content text-lg"
        >
          {links}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <img src={user} alt="" />
        <button className="btn btn-primary px-7 text-lg font-normal">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
