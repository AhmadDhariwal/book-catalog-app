"use client";

import { mutate } from "swr";

interface BookCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    genre: string;
  };
}

export default function BookCard({ book }: BookCardProps) {
  // Handle book deletion
  async function handleDelete() {
    try {
      const res = await fetch(`/api/books/${book.id}`, { method: "DELETE" });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to delete book");
      }

      // Revalidate SWR cache for the book list
      mutate("/api/books");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Could not delete book. Check console for details.");
    }
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-3xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl w-full max-w-sm mx-auto">
      {/* Book image */}
      <div className="h-40 bg-indigo-200 flex items-center justify-center rounded-t-3xl">
        <img
          src="https://img.icons8.com/external-flat-juicy-fish/200/external-book-education-flat-flat-juicy-fish.png"
          alt="Book cover"
          className="h-24 w-24 object-contain"
        />
      </div>

      {/* Book info */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-indigo-700 mb-2">{book.title}</h2>
        <p className="text-gray-800 font-medium mb-1">✍️ {book.author}</p>
        <p className="text-sm text-gray-600 italic">📖 {book.genre}</p>

        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 rounded-xl shadow-md transition"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
