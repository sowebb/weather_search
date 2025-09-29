import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./theme/ThemeProvider";
import WeatherPage from "./pages/WeatherPage";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<WeatherPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
