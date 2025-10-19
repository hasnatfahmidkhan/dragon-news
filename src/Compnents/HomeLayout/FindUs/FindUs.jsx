import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <a
          href="https://www.facebook.com/hasnatfahmidkhan"
          target="_blank"
          className="btn text-accent-content join-item w-full flex justify-start items-center gap-2 text-lg py-7 px-5 bg-base-100"
        >
          <span className="bg-base-300 w-10 h-10 flex items-center justify-center rounded-full">
            <FaFacebook color="#1877F2" />
          </span>{" "}
          Facebook
        </a>
        <button className="btn text-accent-content join-item w-full flex justify-start items-center gap-2 text-lg py-7 px-5 bg-base-100">
          <span className="bg-base-300 w-10 h-10 flex items-center justify-center rounded-full">
            <FaTwitter color="#1DA1F2" />
          </span>{" "}
          Twitter
        </button>
        <button className="btn text-accent-content join-item w-full flex justify-start items-center gap-2 text-lg py-7 px-5 bg-base-100">
          <span className="bg-base-300 w-10 h-10 flex items-center justify-center rounded-full">
            <FaInstagram color="#E4405F" />
          </span>{" "}
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
