import React from "react";

export default function videos() {
  const videos = [
    {
      id: 1,
      title: "Introduction to Financial Accounting",
      videoUrl: "/video1.mp4",
    },
    { id: 2, title: "Advanced Topics in Accounting", videoUrl: "/video2.mp4" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Financial Accounting Videos
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-4">
          {videos.map((video) => (
            <div key={video.id} className="mb-6">
              <h2 className="text-lg font-bold">{video.title}</h2>
              <video
                controls
                className="w-full rounded-lg mt-2"
                src={video.videoUrl}
              ></video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
