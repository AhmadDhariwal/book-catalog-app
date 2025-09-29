"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBookPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, genre }),
    });

    router.push("/");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-indigo-600 to-pink-500 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }}
    >
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-pink-400/20 blur-2xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow">
          ➕ Add a New Book
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Book Title"
            className="w-full p-3 rounded-lg bg-white/80 border-none focus:ring-2 focus:ring-pink-400 text-gray-800 placeholder-gray-500 shadow-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author Name"
            className="w-full p-3 rounded-lg bg-white/80 border-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder-gray-500 shadow-md"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Genre (e.g. Fiction, History)"
            className="w-full p-3 rounded-lg bg-white/80 border-none focus:ring-2 focus:ring-purple-400 text-gray-800 placeholder-gray-500 shadow-md"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
