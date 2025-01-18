import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function bigdetail() {
  const { state: post } = useLocation(); // Get blog post data from state
  const { id } = useParams(); // Optional: Access ID from the URL

  if (!post) {
    return <p>Blog post not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
        <p className="text-sm text-gray-600 mb-4">{post.date}</p>
        <div className="flex items-center mb-6">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">
              {post.author.name}
            </p>
            <p className="text-sm text-gray-500">{post.author.role}</p>
          </div>
        </div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-lg text-gray-700">{post.content}</p>
      </div>
    </div>
  );
}
