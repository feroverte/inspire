import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="mt-[8ch]">
        {/* Nested Routes will render here */}
        <Outlet />
      </main>
    </div>
  );
};

export default layout;
