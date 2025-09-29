import React, { useState } from "react";
import ExampleQuestions from "../components/ExampleQuestions";
import WeatherQueryInput from "../components/WeatherQueryInput";
import WeatherDashboard from "../components/WeatherDashboard";
import AiOnlyResponse from "../components/AiOnlyResponse";

export default function WeatherPage() {
  const [query, setQuery] = useState("");
  const [resultType, setResultType] = useState<"ai" | "weather" | null>(null);

  function handleQuerySubmit(q: string) {
    setQuery(q);
    // Simple classifier: if query includes "pack" or "trip", treat as AI-only
    if (/pack|trip|should i/i.test(q)) {
      setResultType("ai");
    } else {
      setResultType("weather");
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">Your Intelligent Weather Companion</h1>
      <p className="mb-6">Ask weather questions like you're texting a friend</p>
      <WeatherQueryInput onSubmit={handleQuerySubmit} />
      <ExampleQuestions />
      {resultType === "ai" && <AiOnlyResponse query={query} />}
      {resultType === "weather" && <WeatherDashboard query={query} />}
    </div>
  );
}
