import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import validatePassword from "../../utility/validatePassword";

const Register = () => {
  const { createUser, profileUpdata, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    const terms = form.terms.checked;

    const isValid = validatePassword(password);
    if (isValid) {
      setError(isValid);
      return;
    }

    if (!terms) {
      setError("please accept terms and conditions!");
      return;
    }
    // create user or register
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        profileUpdata({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
            toast.error(error.message);
            setUser(user);
          });
      })
      .catch((err) => {
        alert(err.code, err.message);
      });
  };
  return (
    <div className="flex flex-col bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10 rounded-md">
      <h1 className="text-2xl text-center text-accent font-semibold mt-5">
        Register Your Account
      </h1>
      <div className="divider"></div>
      <form
        onSubmit={handleRegister}
        className="flex items-center justify-center w-full"
      >
        <fieldset className="fieldset gap-4 w-full">
          {/* Name  */}
          <div className="space-y-1 w-full ">
            <label className="label text-base">Your Name</label>
            <input
              type="text"
              required
              name="name"
              className="input w-full focus:outline-none "
              placeholder="Enter your name"
            />
          </div>
          {/* Photo URL  */}
          <div className="space-y-1 w-full ">
            <label className="label text-base">Photo URL</label>
            <input
              type="text"
              required
              name="photo"
              className="input w-full focus:outline-none "
              placeholder="Enter your photo url"
            />
          </div>
          {/* Email  */}
          <div className="space-y-1 w-full ">
            <label className="label text-base">Email</label>
            <input
              type="email"
              required
              name="email"
              className="input w-full focus:outline-none "
              placeholder="Email"
            />
          </div>
          {/* Password  */}
          <div className="space-y-1 w-full ">
            <label className="label text-base">Password</label>
            <input
              type="password"
              required
              name="password"
              className="input w-full focus:outline-none "
              placeholder="Password"
            />
          </div>
          {/* Terms and Condition  */}
          <div className="flex items-center gap-1">
            <label className="label text-accent text-sm">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-sm"
              />
              Accept <Link className="font-semibold hover:underline">Term</Link>{" "}
              &{" "}
              <Link className="font-semibold hover:underline">Conditions</Link>
            </label>
          </div>
          <p className="text-secondary">{error}</p>
          {/* Register  */}
          <button type="submit" className="btn btn-primary mt-4 text-base">
            Register
          </button>
          <div>
            <p className="text-accent font-semibold text-sm text-center">
              Already have an account?{" "}
              <Link
                to={"/auth/login"}
                className="text-secondary hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
