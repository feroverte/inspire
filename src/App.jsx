import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Signup from "./signup";
import ForgotPassword from "./forgot";
import Home from "./Home";
import Mainpage from "./mainpage";
import Courses from "./courses";
import Videos from "./videos";
import Blog from "./blog";
import BlogDetail from "./bigdetail";
import Navbar from "./navbar";
import Profile from "./profile";
import Resources from "./resources";

function App() {
  return (
    <Router basename="/inspire">
      {" "}
      {/* Set the basename */}
      <Routes>
        {/* Routes without Navbar */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Routes with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Layout />
            </>
          }
        >
          <Route index element={<Mainpage />} />
          <Route path="mainpage" element={<Mainpage />} />
          <Route path="courses" element={<Courses />} />
          <Route path="videos" element={<Videos />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
