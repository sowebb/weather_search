import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-3">Contact Us</h1>
      <p>
        Have feedback, questions, or want to reach out? Send us an email at{" "}
        <a href="mailto:info@askweather.ai" className="underline text-blue-700">
          info@askweather.ai
        </a>
        .
      </p>
      <p className="mt-4">
        We're always looking to improve. Your ideas and suggestions are welcome!
      </p>
    </div>
  );
}
