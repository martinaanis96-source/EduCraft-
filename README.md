"use client"; // Needed so we can use React hooks

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setOutput(data.result);
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>ClassGenie AI ✨</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder="Paste lesson text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleGenerate}>Generate Quiz</button>
      <h2>Result:</h2>
      <pre>{output}</pre>
    </div>
  );
}
