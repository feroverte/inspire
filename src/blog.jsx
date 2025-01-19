import React from "react";
import { Link } from "react-router-dom";

export default function blog() {
  const blogPosts = [
    {
      id: 1,
      title: "MBA (Master of Business Administration)",
      excerpt: "What is an MBA program? If you want to improve your career...",
      content: "Full content about MBA programs goes here...",
      date: "August 23, 2024",
      author: {
        name: "Shamil Aliyev",
        role: "Co-Founder",
        image: "/author1.jpg",
      },
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "Places to Study Around Bilgi University",
      excerpt:
        "Although there is plenty of space to study on the Bilgi University campus, sometimes you can just have a nice coffee and relax....",
      content: "Full content about places to study at Bilgi University...",
      date: "April 24, 2024",
      author: {
        name: "Islam Abbasov",
        role: "Customer Support",
        image: "/author2.jpg",
      },
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "8 Best Places to Study on the European Side of Istanbul",
      excerpt:
        "For those looking for a change in the European Side of Istanbul and those who are bored of their usual study routines...",
      content: "Full content about best places to study in Istanbul...",
      date: "April 4, 2024",
      author: {
        name: "Farhad Aliyev",
        role: "Customer Support",
        image: "/author3.jpg",
      },
      image: "/blog3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Inspire Education Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              state={post} // Passing blog data via state
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600">{post.date}</p>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
