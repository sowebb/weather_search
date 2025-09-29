import React from "react";
import { Routes, Route } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WeatherPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}
