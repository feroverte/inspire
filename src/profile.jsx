import React, { useState, useEffect } from "react";

const App = () => {
  // Simulate user login state
  const [user, setUser] = useState(null);

  // Simulate fetching user data after login
  useEffect(() => {
    // Example: Replace this with your actual login data fetch
    const fetchUserData = async () => {
      const loggedInUser = {
        name: "Abbasov Tural",
        role: "SEO Course Trainer",
      };
      setUser(loggedInUser);
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div>
              <h2 className="text-lg font-semibold">
                {user ? user.name : "Loading..."}
              </h2>
              <p className="text-sm text-gray-400">
                {user ? user.role : "Fetching role..."}
              </p>
            </div>
          </div>
        </div>
        <nav className="mt-6 flex-1">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Activity
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Tasks
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Account
              </a>
            </li>
          </ul>
        </nav>
        <div className="px-6 py-4">
          <button className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-500">
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Courses</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded"
            />
            <span className="absolute top-2.5 right-3 text-gray-400">🔍</span>
          </div>
        </header>

        {/* Dashboard Info */}
        <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
          <div>
            <h2 className="text-lg font-semibold">
              Hello {user ? user.name : "User"}!
            </h2>
            <p className="text-sm text-gray-500">
              We are happy to see you again.
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="px-4 py-2 bg-gray-800 text-white rounded">
                My Courses
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded">
                What's new
              </button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold">11</p>
            <p className="text-gray-500">Courses Completed</p>
            <p className="mt-2 text-gray-500">15 Pending</p>
            <div className="mt-2 w-48 bg-gray-200 h-2 rounded">
              <div
                className="bg-yellow-500 h-2 rounded"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Courses and Activity */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          {/* Courses */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2">Course</th>
                  <th>Owner</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Social Media API</td>
                  <td>Olivia Cambell</td>
                  <td>1h 6m</td>
                  <td className="text-blue-500">In Progress</td>
                  <td>2023-08-23</td>
                </tr>
                <tr>
                  <td className="py-2">Geolocation App</td>
                  <td>Luca Micloe</td>
                  <td>55m</td>
                  <td className="text-green-500">Done</td>
                  <td>2024-04-11</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Activity */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Activity</h3>
            <ul>
              <li className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex justify-center items-center">
                  09:15
                </span>
                <p>Completed API Course</p>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex justify-center items-center">
                  12:30
                </span>
                <p>Lunch break</p>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex justify-center items-center">
                  15:45
                </span>
                <p>Preview Course New XYZ</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
