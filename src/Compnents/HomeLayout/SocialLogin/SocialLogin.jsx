import { use } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { googleSignIn, setUser } = use(AuthContext);
  const navigate = useNavigate();

  // login with google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-5">Login With</h2>
      <div className="space-y-4">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full btn-secondary"
        >
          <FaGoogle /> Login With Google
        </button>
        <button className="btn btn-outline w-full btn-primary">
          <FaGithub /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
