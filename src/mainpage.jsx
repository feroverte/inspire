import React, { useState, useEffect } from "react";
import telegram from "./assets/telegram.svg";
import instagram from "./assets/instagram.svg";
import tiktok from "./assets/tiktok.svg";
import mainvid from "./assets/mainvid.mp4";
import pp1 from "./assets/pp1.png";
import pp2 from "./assets/pp2.png";
import pp3 from "./assets/pp3.png";

import as from "./assets/assignment.gif";
import re from "./assets/research.gif";
import co from "./assets/explanation.gif";
import ex from "./assets/exam.gif";
import cons from "./assets/consultation.gif";
import pre from "./assets/presentation.gif";

import redHand from "./assets/red-hand.png";
import blueHand from "./assets/blue-hand.png";

export default function mainpage() {
  const currentYear = new Date().getFullYear();
  const steps = [
    {
      icon: "🎓",
      title: "Discover courses tailored to your faculty",
      description:
        "View courses prepared according to your faculty's academic catalogue and choose the courses you are currently taking.",
    },
    {
      icon: "📹",
      title: "Watch the lessons",
      description:
        "Learn the basics of your course quickly by watching concise video lessons.",
    },
    {
      icon: "✏️",
      title: "Solve questions",
      description:
        "Get ready for every exam question by practicing hundreds of past questions.",
    },
    {
      icon: "📊",
      title: "Get the grades you want",
      description:
        "After watching lessons and solving questions, you’ll be ready for your exams!",
    },
  ];
  const professors = [
    {
      name: "Dr. Emily Carter",
      subject: "Physics",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Prof. John Smith",
      subject: "Mathematics",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Dr. Linda Johnson",
      subject: "Chemistry",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Prof. Robert Brown",
      subject: "Biology",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Dr. Emily Carter",
      subject: "Physics",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Prof. John Smith",
      subject: "Mathematics",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Dr. Linda Johnson",
      subject: "Chemistry",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Prof. Robert Brown",
      subject: "Biology",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Dr. Emily Carter",
      subject: "Physics",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Prof. John Smith",
      subject: "Mathematics",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Dr. Linda Johnson",
      subject: "Chemistry",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
    {
      name: "Prof. Robert Brown",
      subject: "Biology",
      photo: "https://via.placeholder.com/100", // Replace with actual photo URLs
    },
  ];
  const words = [
    "Assignments",
    "Consultations",
    "Presentations",
    "Paper Reviews",
    "Exams",
    "Coding",
  ];
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (!deleting) {
        // Typing the current word
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWord.length - 1) {
          setDeleting(true);
        }
      } else {
        // Deleting the current word
        if (charIndex > 0) {
          setText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Transition to the next word without displaying the empty word
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setCharIndex(0);
        }
      }
    };

    const timer = setTimeout(handleTyping, deleting ? 200 : 200);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex, words]);
  return (
    <>
      {/* Header Video and text */}
      {/* Header Video and text */}
      {/* Header Video and text */}
      <header>
        <div className="relative w-full h-screen overflow-hidden">
          {/* Video Background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src={mainvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-20 lg:px-40 text-white">
            {/* Main Text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <br />
              <br />
              <br />
              <br />
              <br />
              <span className="italic text-yellow-300">
                Get better Grades from <br />
              </span>
              <span className="italic text-yellow-300">
                Midterms and Finals
              </span>
            </h1>

            {/* Button */}
            <button className="bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-xl mt-4 shadow-lg hover:bg-blue-400 hover:border-blue-400 transition-colors duration-300 border-yellow-300 border-4">
              Join Now
            </button>

            {/* Ratings */}
            <div className="flex items-center mt-6 space-x-4">
              <div className="flex -space-x-2">
                {/* Profile Images */}
                <img
                  className="w-8 h-8 rounded-full border-2 border-yellow-300"
                  src={pp2}
                  alt="Profile 1"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-yellow-300"
                  src={pp3}
                  alt="Profile 2"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-yellow-300"
                  src={pp1}
                  alt="Profile 3"
                />
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  <span className="text-yellow-400 font-bold">10+</span>{" "}
                  students are already learning here
                </p>
              </div>
            </div>
          </div>

          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        </div>
      </header>
      <div></div>
      <div></div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-black">
        {/* Centered Text */}
        <div className="text-white text-center mb-40 pb-10">
          <span className="text-3xl font-bold">What will be your choice?</span>
        </div>

        {/* Hands */}
        <div className="flex space-x-8">
          {/* Blue Hand */}
          <div className="group relative w-64 h-64 transition-transform duration-500 hover:scale-125">
            <img
              src={blueHand}
              alt="Blue Hand"
              className="absolute left-0 top-0 w-full h-full object-contain"
            />
          </div>

          {/* Red Hand */}
          <div className="group relative w-64 h-64 transition-transform duration-500 hover:scale-125">
            <img
              src={redHand}
              alt="Red Hand"
              className="absolute left-0 top-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* We help you with */}
      {/* We help you with */}
      {/* We help you with */}
      <div className="min-h-screen flex flex-col justify-center items-center relative">
        {/* Icons */}
        <div className="grid grid-cols-3 gap-10 items-center w-full max-w-6xl">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-10">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-500 rounded-full">
                <img src={as} alt="Assignments" class="w-6 h-6" />
                <i className="fas fa-edit text-white"></i>
              </div>
              <span>Assignments</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-yellow-500 rounded-full">
                <img src={re} alt="Researches" class="w-6 h-6" />
                <i className="fas fa-file-alt text-white"></i>
              </div>
              <span>Essay & Research Paper Reviewes</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-teal-500 rounded-full">
                <img
                  src={co}
                  alt="concept topic explanations"
                  class="w-6 h-6"
                />
                <i className="fas fa-chalkboard-teacher text-white"></i>
              </div>
              <span>Concept/Topic Explanations</span>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">We Help You With</h1>
            <h2 className="text-3xl font-mono text-blue-500 mt-2">
              {text}
              <span className="animate-blink">|</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-end space-y-10">
            <div className="flex items-center space-x-4">
              <span>Exams</span>
              <div className="p-4 bg-purple-500 rounded-full">
                <img src={ex} alt="Exams" class="w-6 h-6" />
                <i className="fas fa-calculator text-white"></i>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Consultations</span>
              <div className="p-4 bg-green-500 rounded-full">
                <img src={cons} alt="Consultations" class="w-6 h-6" />
                <i className="fas fa-user-tie text-white"></i>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Presentations</span>
              <div className="p-4 bg-red-500 rounded-full">
                <img src={pre} alt="Presentations" class="w-6 h-6" />
                <i className="fas fa-image text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      {/* HOW IT WORKS */}
      {/* HOW IT WORKS */}
      <div className="bg-gray-50 py-16 border-2">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-10">How it works?</h2>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border-slate-100 border-2 shadow-xl p-6 rounded-xl text-left transform transition-transform duration-300 hover:scale-110 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="text-purple-800 text-4xl mb-4">{step.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                {/* Description */}
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* PROFESSORS */}
      {/* PROFESSORS */}
      {/* PROFESSORS */}
      <div className="overflow-hidden py-8 bg-white-50">
        <div>
          <p className="text-center text-3xl font-bold mb-10">
            Meet our dear professors
          </p>
        </div>
        <div className="flex w-max animate-scroll gap-6">
          {professors.map((prof, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white shadow-lg rounded-lg p-4 text-center w-48"
            >
              <img
                src={prof.photo}
                alt={prof.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{prof.name}</h3>
              <p className="text-gray-600">{prof.subject}</p>
            </div>
          ))}
        </div>
      </div>
      {/* FOOOOOOTER */}
      {/* FOOOOOOTER */}
      {/* FOOOOOOTER */}
      <footer className="bg-gray-50 text-gray-700 py-10">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="text-blue-700 text-2xl font-bold hover:text-blue-800"
            >
              INSPIRE
            </a>
          </div>

          {/* Links: Inspire */}
          <div>
            <h5 className="text-blue-700 font-semibold mb-3">INSPIRE</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-700">
                  Log in
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Sub Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Faculties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Support */}
          <div>
            <h5 className="text-blue-700 font-semibold mb-3">SUPPORT</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-700">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h5 className="text-blue-700 font-semibold mb-3">COMPANY</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Policies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* instagrm telegram links */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 pr-10 pl-10">
          <p>© {currentYear} Inspire Education. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-700">
              <img src={instagram} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-blue-700">
              <img src={tiktok} alt="TikTok" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-blue-700">
              <img src={telegram} alt="telegram" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
