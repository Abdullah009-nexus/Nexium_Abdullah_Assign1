"use client";
import React, { useState } from "react";
import { quotes } from "./quotes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [selectedQuotes, setSelectedQuotes] = useState<typeof quotes>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <main className="min-h-screen bg-black flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
        <Input
          type="text"
          placeholder="Enter a topic (optional)"
          value={topic}
          onChange={e => setTopic(e.target.value)}
        />
        <Button type="submit">Get Quote</Button>
      </form>
      <div className="max-w-xl">
        {selectedQuotes.length > 0 && (
          <>
            <div className="mb-6 p-4 border border-zinc-800 rounded-lg bg-zinc-900">
              <blockquote className="italic text-white text-xl">
                &ldquo;{selectedQuotes[0].text}&rdquo;
              </blockquote>
              <div className="text-right mt-2 text-white">
                — {selectedQuotes[0].author}
              </div>
            </div>
            <Button type="button" onClick={handleNextQuote} className="bg-zinc-800 text-white">
              Next Quote
            </Button>
          </>
        )}
      </div>
    </main>
  );
}
