import React from "react";
import Forgot from "./assets/forgotlight.svg";

export default function ForgotPassword() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-11/12 max-w-4xl rounded-lg shadow-xl overflow-hidden bg-white">
        {/* Left Side with Background Image */}
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Forgot})`,
          }}
        ></div>

        {/* Right Side with Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Forgot Password
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Enter your email address below to reset your password.
          </p>

          {/* Email Input */}
          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 w-full font-black shadow border-2 border-transparent border-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 hover:border-neutral-500 transition-all duration-300 rounded-lg"
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-blue-400 to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg transition-shadow duration-300"
            >
              Reset Password
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <a href="/signup" className="text-sm text-blue-500 hover:underline">
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
