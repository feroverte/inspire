import React from "react";

export default function courses() {
  const courses = [
    {
      id: 1,
      title: "ACCT 201 • Final",
      subtitle: "Financial Accounting",
      price: "muradin gotu",
      image: "/path-to-image1.jpg",
    },
    {
      id: 2,
      title: "ACCT 202 • Final",
      subtitle: "Managerial Accounting",
      price: "xuynya qiymet",
      image: "/path-to-image2.jpg",
    },
    {
      id: 3,
      title: "BLAW 202 • Final",
      subtitle: "Business Law",
      price: "5 manat",
      image: "/path-to-image3.jpg",
    },
    {
      id: 4,
      title: "CHEM 101 • Midterm II + Final",
      subtitle: "General Chemistry I",
      price: "2 qepik",
      image: "/path-to-image4.jpg",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Lessons (Fall 24)
        </h1>
        <input
          type="text"
          placeholder="CSCI 2406..."
          className="w-full p-3 border border-gray-300 rounded-lg mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg">{course.title}</h2>
                <p className="text-gray-600">{course.subtitle}</p>
                <p className="text-red-600 font-bold mt-2">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
