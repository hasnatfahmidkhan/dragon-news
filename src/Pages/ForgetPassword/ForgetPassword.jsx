import { use, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { resetPassword } = use(AuthContext);
  const [emailSent, setEmailSent] = useState(false);
  const handlePasswordReset = (e) => {
    e.preventDefault();
    setEmailSent(true);
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        setEmailSent(false);
        toast.success("Sent you a mail, Please check your inbox!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="hero bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
        <div className="text-center px-5 pt-5">
          <h1 className="text-2xl font-bold">Forget password?</h1>
          <p className="text-sm text-gray-500 mt-2">
            Enter your registered email address and we'll send you a link to
            reset your password.
          </p>
        </div>
        <div className="card-body">
          <form onSubmit={handlePasswordReset}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                required
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              <button className="btn bg-blue-500 hover:bg-blue-600 text-white mt-4">
                {emailSent ? "Sending" : "Send reset link"}
              </button>
            </fieldset>
          </form>
          <div className="">
            <Link
              className="flex items-center gap-1 hover:underline text-blue-600 font-medium"
              to={"/auth/login"}
            >
              <FaArrowLeft size={15} />
              Bank to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
