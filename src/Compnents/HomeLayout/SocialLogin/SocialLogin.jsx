import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-5">Login With</h2>
      <div className="space-y-4">
        <button className="btn btn-outline w-full btn-secondary">
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
