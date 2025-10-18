import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex flex-col bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10 rounded-md">
      <h1 className="text-2xl text-center text-accent font-semibold mt-5">
        Login Your Account
      </h1>
      <div className="divider"></div>
      <form className="flex items-center justify-center w-full">
        <fieldset className="fieldset gap-4 w-full">
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
          <div>
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>
          <button className="btn btn-primary mt-4">Login</button>
          <div>
            <p className="text-accent font-semibold text-base">
              Don't have an account?{" "}
              <Link to={"/auth/register"} className="text-secondary hover:underline">
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
