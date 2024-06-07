import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { APPLE_PNG, FACEBOOK_PNG, GOOGLE_PNG } from "../constants/constants";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="grid h-screen w-screen place-items-center bg-secondary overflow-hidden">
      <div className="h-4/5 w-11/12 sm:w-3/4 md:h-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg bg-white p-5">
        <h1 className="text-center text-xl font-bold">Login</h1>
        <div className="mx-6 grid place-items-center">
          <label className="text-md w-full py-2 font-semibold">Email*</label>
          <input
            type="email"
            className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm  placeholder-gray-400"
            placeholder="Enter your email"
          />

          <label className="text-md w-full py-2 font-semibold">Password*</label>
          <div className="relative mb-4 w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="h-12 w-full rounded-lg border-2 border-black px-5 text-sm  placeholder-gray-400"
              placeholder="Set your Password"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 transform"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEye className="text-xl" />
              ) : (
                <FaRegEyeSlash className="text-xl" />
              )}
            </button>
          </div>

          <label className="text-md w-full py-2 font-semibold">
            Confirm Password*
          </label>
          <div className="relative mb-2 w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
              placeholder="Confirm password"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 transform"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaRegEye className="text-xl" />
              ) : (
                <FaRegEyeSlash className="text-xl" />
              )}
            </button>
          </div>
          <p className="cursor-pointer justify-self-end text-xs text-gray-400 underline">
            Forgot Password?
          </p>

          <button className="mx-10 mt-5 h-12 w-full sm:w-80 rounded-md bg-primary text-center font-bold shadow-sm">
            LOGIN NOW
          </button>
          <p className="py-2 font-semibold text-sm">
            Don't have an account?{" "}
            <Link to={'signup'}>
             <span className="cursor-pointer underline">Register Now</span>
            </Link>
          </p>

          <div className="flex items-center justify-center w-full my-4">
            <div className="h-px w-full bg-black"></div>
            <span className="px-3">or</span>
            <div className="h-px w-full bg-black"></div>
          </div>
        </div>

        <div className="flex gap-10 items-center justify-center cursor-pointer">
           <img className="w-12 h-12" src={FACEBOOK_PNG}></img>
           <img className="w-9 h-9" src={GOOGLE_PNG}></img>
           <img className="w-12 h-12" src={APPLE_PNG}></img>

          </div>
      </div>
    </div>
  );
};

export default Login;
