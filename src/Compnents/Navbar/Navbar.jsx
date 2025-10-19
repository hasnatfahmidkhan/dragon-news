import { Link, NavLink, useNavigate } from "react-router";
import userIcon from "../../assets/user.png";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Log out Successfully");
      })
      .catch((error) => {
        alert(error.code, error.message);
      });
  };
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
      <div>{(user && user?.displayName) || user?.email}</div>
      <div>
        <ul
          id="navlinks"
          className="flex items-center gap-5 text-accent-content text-lg"
        >
          {links}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <Link to={"/profile"}>
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={user.photoURL}
                alt={user.displayName}
              />
            </Link>

            <button
              onClick={handleLogOut}
              className="btn btn-primary px-7 text-lg font-normal"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <img src={userIcon} alt="" />
            <button
              onClick={() => navigate("/auth/login")}
              className="btn btn-primary px-7 text-lg font-normal"
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
