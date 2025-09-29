"use client";

import useSWR from "swr";
import BookCard from "@/components/BookCard";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data: books, error, isLoading } = useSWR("/api/books", fetcher);

  return (
    <div
      className="min-h-screen w-full flex flex-col text-gray-900"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(58,28,113,0.9) 0%, rgba(215,109,119,0.85) 50%, rgba(255,175,123,0.85) 100%), url('/library-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Header */}
      <header className="bg-indigo-900/70 text-white py-16 px-4 sm:px-8 text-center shadow-lg backdrop-blur-md">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          📚 Book Catalog
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-4">
          Browse your collection and keep track of every book you own.
        </p>
        <p className="italic text-indigo-100">
          “A room without books is like a body without a soul.” — Cicero
        </p>
      </header>

      {/* Book Grid */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow">
          Your Library
        </h2>

        {error && (
          <div className="text-red-500 p-6 text-center">
            ❌ Failed to load books
          </div>
        )}

        {isLoading || !books ? (
          <div className="text-gray-200 p-6 text-center">
            ⏳ Loading books...
          </div>
        ) : books.length === 0 ? (
          <p className="text-gray-800 text-center bg-white/90 rounded-lg py-8 shadow">
            No books yet. Add one to get started!
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book: any) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </main>

      {/* Advantages Section */}
      <section className="bg-white/95 py-16 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-bold text-indigo-800 mb-10">
          ✨ Advantages of Reading Books
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Boosts Imagination",
              desc: "Reading helps unlock creativity and visualization skills.",
            },
            {
              title: "Improves Knowledge",
              desc: "Every book you read adds something valuable to your mind.",
            },
            {
              title: "Reduces Stress",
              desc: "Books provide a calming escape from everyday worries.",
            },
            {
              title: "Enhances Focus",
              desc: "Reading strengthens attention span and concentration.",
            },
            {
              title: "Strengthens Memory",
              desc: "Remembering stories and characters sharpens your memory.",
            },
            {
              title: "Better Communication",
              desc: "Reading improves vocabulary and writing skills.",
            },
          ].map((adv, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-r from-indigo-100 to-pink-100 rounded-2xl shadow hover:scale-105 transition"
            >
              <h4 className="text-xl font-bold text-indigo-700 mb-2">
                {adv.title}
              </h4>
              <p className="text-gray-700">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-pink-200/80 to-indigo-200/80">
        <h3 className="text-3xl font-bold text-center text-indigo-800 mb-12">
          🌟 What Readers Say
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
              quote: "Books open up new worlds I could never imagine.",
              name: "Emily, Avid Reader",
            },
            {
              img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
              quote: "Reading daily keeps me inspired and motivated.",
              name: "James, Writer",
            },
            {
              img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
              quote: "Books are my best friends and my best teachers.",
              name: "Sophia, Student",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={t.img}
                alt="Book testimonial"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
                <p className="font-bold text-indigo-700">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quotes Section */}
      <section className="bg-white/95 py-16 px-6 md:px-20 border-t">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-indigo-700">
          📖 Inspirational Quotes
        </h3>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2">
          <div className="p-6 bg-indigo-50 rounded-3xl shadow hover:shadow-lg transition">
            <p className="text-lg italic text-gray-800">
              “The more that you read, the more things you will know. The more
              that you learn, the more places you'll go.” — Dr. Seuss
            </p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-3xl shadow hover:shadow-lg transition">
            <p className="text-lg italic text-gray-800">
              “Books are a uniquely portable magic.” — Stephen King
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900/90 text-white text-center py-8 mt-auto backdrop-blur">
        © 2025 Book Catalog. Built with ❤️ using Next.js & TailwindCSS.
      </footer>
    </div>
  );
}
