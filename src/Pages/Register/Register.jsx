import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex flex-col bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10 rounded-md">
      <h1 className="text-2xl text-center text-accent font-semibold mt-5">
        Register Your Account
      </h1>
      <div className="divider"></div>
      <form className="flex items-center justify-center w-full">
        <fieldset className="fieldset gap-4 w-full">
          <div className="space-y-1 w-full ">
            <label className="label text-base">Your Name</label>
            <input
              type="text"
              className="input w-full focus:outline-none "
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-1 w-full ">
            <label className="label text-base">Photo URL</label>
            <input
              type="text"
              className="input w-full focus:outline-none "
              placeholder="Enter your photo url"
            />
          </div>
          <div className="space-y-1 w-full ">
            <label className="label text-base">Email</label>
            <input
              type="email"
              className="input w-full focus:outline-none "
              placeholder="Email"
            />
          </div>
          <div className="space-y-1 w-full ">
            <label className="label text-base">Password</label>
            <input
              type="password"
              className="input w-full focus:outline-none "
              placeholder="Password"
            />
          </div>
          <div className="flex items-center gap-1">
            <label className="label text-accent text-sm">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Accept <Link className="font-semibold hover:underline">
                Term
              </Link>{" "}
              &{" "}
              <Link className="font-semibold hover:underline">Conditions</Link>
            </label>
          </div>
          <button className="btn btn-primary mt-4">Register</button>
          <div>
            <p className="text-accent font-semibold text-base">
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
