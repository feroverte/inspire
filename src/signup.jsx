import React, { useState } from "react";
import logo from "./assets/LOGO.svg";
import logodark from "./assets/LOGODARK.svg"; // dark mode logo import
import { IoMoon, IoSunny } from "react-icons/io5";

const BASE_URL = "http://localhost:5000"; // Backend base URL

export default function Signup() {
  const [isSwapped, setIsSwapped] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSwap = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsSwapped((prev) => !prev);
      setIsFading(false);
      setErrorMessage("");
    }, 500); // Duration of fade-out animation
  };

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const handleSignup = async () => {
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Signup failed");
        return;
      }

      setErrorMessage("Signup successful! Please log in.");
      setIsSwapped(false);
    } catch (error) {
      setErrorMessage("An error occurred during signup. Please try again.");
    }
  };

  const handleLogin = async () => {
    setErrorMessage("");

    try {
      const response = await fetch(
        `${BASE_URL}/users/login?email=${email}&password=${password}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed");
        return;
      }

      const user = await response.json(); // Adjust your server to return user details
      localStorage.setItem("user", JSON.stringify(user)); // Save user data locally
      setErrorMessage("Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/inspire/";
      }, 1500);
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div
      className={`flex justify-center items-center h-screen px-4 ${
        darkMode ? "bg-black" : "bg-gray-100"
      } transition-all duration-500`}
    >
      <div
        className={`flex flex-col md:flex-row justify-between items-stretch border rounded-lg overflow-hidden max-w-7xl w-full md:h-auto 
          ${isFading ? "opacity-0" : "opacity-100"} 
          transition-all duration-500 
          ${
            darkMode
              ? "bg-black shadow-xl shadow-yellow-200"
              : "bg-white shadow-xl shadow-blue-200"
          }`}
      >
        <button
          onClick={darkModeHandler}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-white"
        >
          {darkMode ? <IoSunny /> : <IoMoon />}
        </button>

        <div
          className={`flex flex-col justify-between w-full md:w-1/2 p-6 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <section className="flex justify-center items-center mb-6">
            <img
              src={darkMode ? logodark : logo}
              alt="ADA Inspire"
              className="mx-auto w-40 md:w-48 lg:w-56 transition-all duration-500"
            />
          </section>

          <section className="space-y-4">
            {isSwapped && (
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`p-2 w-full font-black shadow border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-200 hover:border-neutral-500 transition-all duration-300 rounded-lg ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`p-2 w-full font-black shadow border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-200 hover:border-neutral-500 transition-all duration-300 rounded-lg ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`p-2 w-full font-black shadow border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-200 hover:border-neutral-500 transition-all duration-300 rounded-lg ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            />
            {isSwapped && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`p-2 w-full font-black shadow border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-200 hover:border-neutral-500 transition-all duration-300 rounded-lg ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
              />
            )}
          </section>

          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

          <section className="mt-6">
            <button
              onClick={isSwapped ? handleSignup : handleLogin}
              className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 ${
                darkMode
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                  : "bg-gradient-to-r from-blue-300 to-blue-600"
              }`}
            >
              {isSwapped ? "Sign Up" : "Sign In"}
            </button>
          </section>

          <section className="flex justify-between mt-6">
            <p className="p-2">
              {isSwapped
                ? "Already have an account?"
                : "Don't have an account?"}
            </p>
            <button
              onClick={handleSwap}
              className="inline-block rounded px-6 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:shadow-lg focus:outline-none p-2"
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #F59E0B, #F97316)"
                  : "linear-gradient(to right, #62cff4, #2c67f2)",
              }}
            >
              {isSwapped ? "Sign In" : "Sign Up"}
            </button>
          </section>
        </div>

        <div
          className={`flex justify-center items-center w-full md:w-1/2 p-8 ${
            darkMode
              ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
              : "bg-gradient-to-r from-blue-300 to-blue-600"
          }`}
        >
          <section className="text-center max-w-md">
            <h1
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-white"
              }`}
            >
              We are more than just a club
            </h1>
            <p
              className={`text-white ${darkMode ? "text-white" : "text-white"}`}
            >
              ADA Inspire is an innovative platform dedicated to providing
              top-tier educational consultation and resources for university
              students.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
