import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(false);

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location.state || "/");
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex flex-col bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10 rounded-md">
      <h1 className="text-2xl text-center text-accent font-semibold mt-5">
        Login Your Account
      </h1>
      <div className="divider"></div>
      <form
        onSubmit={handleLogin}
        className="flex items-center justify-center w-full"
      >
        <fieldset className="fieldset gap-4 w-full">
          {/* Email  */}
          <div className="space-y-1 w-full">
            <label className="label text-base">Email</label>
            <input
              type="email"
              required
              name="email"
              className="input w-full focus:outline-none"
              placeholder="Email"
            />
          </div>
          {/* Password  */}
          <div className="space-y-1 w-full">
            <label className="label text-base">Password</label>
            <div className="relative flex items-center">
              <input
                type={showpass ? "text" : "password"}
                required
                name="password"
                className="input w-full focus:outline-none"
                placeholder="Password"
              />
              <span
                onClick={() => setShowpass(!showpass)}
                className="absolute right-3.5 active:translate-y-0.5 transition duration-200 cursor-pointer z-50"
              >
                {showpass ? <FaEyeSlash size={24} /> : <FaEye size={22} />}
              </span>
            </div>
          </div>
          {/* Forget Password  */}
          <div>
            <Link
              to="/auth/forget-password"
              className="link link-hover text-sm"
            >
              Forgot password?
            </Link>
          </div>
          {/* Login  */}
          <button type="submit" className="btn btn-primary mt-4 text-base">
            Login
          </button>
          <div>
            <p className="text-accent font-semibold text-sm text-center">
              Don't have an account?{" "}
              <Link
                to={"/auth/register"}
                className="text-secondary hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
