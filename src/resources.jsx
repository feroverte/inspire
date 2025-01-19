import React, { useState, useEffect, useRef } from "react";
import owner_photo from "./assets/photo_owner.jpg";
import logo from "./assets/LOGO.svg";
import expectations from "./assets/expectations.png";
import approach from "./assets/approach.png";
import Library from "./assets/library.png";

export default function Resources() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [testsCount, setTestsCount] = useState(0);
  const [booksCount, setBooksCount] = useState(0);
  const statsRef = useRef(null); // Ref for the stats section
  const [hasAnimated, setHasAnimated] = useState(false); // Prevent re-triggering the animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue(setStudentsCount, 20, 1000);
          animateValue(setTestsCount, 2200, 1500);
          animateValue(setBooksCount, 12, 800);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  const animateValue = (setter, endValue, duration) => {
    let startValue = 0;
    const increment = endValue / (duration / 50); // Adjust speed here
    const intervalId = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        setter(Math.round(endValue));
        clearInterval(intervalId);
      } else {
        setter(Math.round(startValue));
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-[32rem] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Library})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h1
            className="heading_text font1"
            style={{
              textAlign: "center",
              fontSize: "36px",
              fontWeight: "bold",
              color: "white",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            We Make Your Knowledge Our Top Priority
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-gray-100 text-center py-12">
        <div className="container mx-auto px-6">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto mb-6"
            style={{ height: "200px" }}
          />
          <h1 className="text-3xl font-bold mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, exercitationem error ullam quas ratione iure. Adipisci
            a sed, est obcaecati aliquam dolorum commodi corporis porro nisi?
            Minus, odio ea. Corrupti!
          </p>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={owner_photo}
            alt="John Doe"
            className="w-40 h-40 mb-6 md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              John Doe Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id necessitatibus similique culpa minus possimus, autem eveniet et
              quibusdam inventore voluptate repellendus nostrum ex in tenetur a!
              Blanditiis, corporis. Ea, enim.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              cum ullam sunt nisi officia maiores obcaecati laboriosam, et
              officiis tempora harum optio, eligendi recusandae, nulla alias
              incidunt exercitationem ducimus tenetur?
            </p>
            <p className="mt-4 text-gray-800 font-bold">
              John Doe - Managing Partner
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gray-50 py-12" ref={statsRef}>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-600">
              {studentsCount}+
            </h3>
            <p className="text-gray-700">Graduated Students</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-600">{testsCount}+</h3>
            <p className="text-gray-700">Tests Worked</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-600">{booksCount}</h3>
            <p className="text-gray-700">Books Covered</p>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="image_text_2col_section flex flex-col sm:flex-row items-center">
          <div className="image_text_2col_left flex justify-center sm:w-1/2">
            <img
              src={approach}
              alt="Thoughtful Approach"
              className="max-w-full h-64 rounded-lg shadow-md"
            />
          </div>
          <div className="image_text_2col_right sm:w-1/2 sm:pl-6 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">
              A Thoughtful Approach to Education
            </h3>
            <p className="text-gray-700 mb-4">
              We create personalized learning plans, connect with educational
              resources, and guide you every step of the way to achieve academic
              success.
            </p>
            <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white">
              About Us
            </button>
          </div>
        </div>
        <div className="image_text_2col_section flex flex-col sm:flex-row-reverse items-center mt-12">
          <div className="image_text_2col_left flex justify-center sm:w-1/2">
            <img
              src={expectations}
              alt="Exceeding Expectations"
              className="max-w-full h-64 rounded-lg shadow-md"
            />
          </div>
          <div className="image_text_2col_right sm:w-1/2 sm:pr-6 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">
              Setting Records and Exceeding Expectations
            </h3>
            <p className="text-gray-700 mb-4">
              Our educational programs are award-winning, with proven results
              that help students achieve their goals and surpass expectations.
            </p>
            <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white">
              View Results
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
