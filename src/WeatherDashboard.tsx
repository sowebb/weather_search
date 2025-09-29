import React from "react";

// Placeholder for weather dashboard results
export default function WeatherDashboard({ query }) {
  // You will later connect this to your weather API and data display
  return (
    <div className="mt-8 p-4 bg-blue-100 rounded">
      <h2 className="text-xl font-semibold mb-2">Weather Results</h2>
      <div>
        {/* Replace this with real weather data */}
        Your weather results for: <span className="font-bold">{query}</span>
      </div>
    </div>
  );
}
