"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function SignInPage() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signIn("credentials", { email, password, callbackUrl: "/" });
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3a1c71] via-[#d76d77] to-[#ffaf7b] relative overflow-hidden"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Left side info */}
        <div className="hidden md:flex flex-col justify-center bg-[#2d0636]/80 px-12 py-16 w-1/2 min-h-[500px]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-white/80 mb-8 text-lg">
            Organize, explore, and manage your personal library with ease. Whether you&apos;re
            adding new books or revisiting classics, we make cataloging simple and enjoyable.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Explore Library
          </button>
        </div>

        {/* Right side signin */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-10">
          <div className="w-full max-w-sm bg-white/20 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-white/30">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow">Sign in</h2>

            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full mb-6 flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Sign in with Google
            </button>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/80 mb-1 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg bg-white/80 border-none focus:ring-2 focus:ring-pink-400 text-gray-800"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-1 font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Your password"
                  className="w-full p-3 rounded-lg bg-white/80 border-none focus:ring-2 focus:ring-pink-400 text-gray-800"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
