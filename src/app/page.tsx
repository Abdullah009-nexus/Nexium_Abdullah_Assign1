"use client";
import React, { useState } from "react";
import { quotes } from "./quotes";
// Import ShadCN UI components (Button, Input, etc.)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [selectedQuotes, setSelectedQuotes] = useState<typeof quotes>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function getRandomQuotes() {
    // Shuffle and pick 3 quotes
    const shuffled = [...quotes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSelectedQuotes([randomQuote]);
    setCurrentIndex(0);
  };

  const handleNextQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (selectedQuotes[0] && newQuote.text === selectedQuotes[0].text && quotes.length > 1);
    setSelectedQuotes([newQuote]);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#000", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 32 }}>
        <Input
          type="text"
          placeholder="Enter a topic (optional)"
          value={topic}
          onChange={e => setTopic(e.target.value)}
        />
        <Button type="submit">Get Quote</Button>
      </form>
      <div style={{ maxWidth: 500 }}>
        {selectedQuotes.length > 0 && (
          <>
            <div style={{ marginBottom: 24, padding: 16, border: "1px solid #222", borderRadius: 8, background: "#111" }}>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: "#fff", fontSize: 22 }}>&ldquo;{selectedQuotes[0].text}&rdquo;</blockquote>
              <div style={{ textAlign: "right", marginTop: 8, color: "#fff" }}>— {selectedQuotes[0].author}</div>
            </div>
            <Button type="button" onClick={handleNextQuote} style={{ background: "#222", color: "#fff" }}>
              Next Quote
            </Button>
          </>
        )}
      </div>
    </main>
  );
}
