import { FadeLoader } from "react-spinners";

const Loader = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <FadeLoader />
    </div>
  );
};

export default Loader;
