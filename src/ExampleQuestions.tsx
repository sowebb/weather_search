import React from "react";

const examples = [
  "What should I pack for my trip to Seattle next week",
  "Was it raining Christmas day in London 1998",
  "Bar hopping next weekend Charleston v Nashville",
  "How much snow did Chicago get last Dec.",
  "What's it like in Houston",
  "Do I need an umbrella in NYC",
  "Is it good hiking weather next Fri in Denver?",
];

export default function ExampleQuestions() {
  return (
    <div className="mt-8 mb-4">
      <div className="font-semibold mb-2">You can ask questions like:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {examples.map((q, i) => (
          <div key={i} className="bg-gray-800 rounded px-4 py-2">
            {q}
          </div>
        ))}
      </div>
    </div>
  );
}
