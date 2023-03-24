import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import ComicDetails from "@/pages/ComicDetails";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:id" element={<ComicDetails />} />
      </Routes>
    </Router>
  );
}
