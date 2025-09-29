"use client";

import { signIn } from "next-auth/react";
export default function SignInPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3a1c71] via-[#d76d77] to-[#ffaf7b] relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden">

        <div className="hidden md:flex flex-col justify-center bg-[#2d0636]/80 px-12 py-16 w-1/2 min-h-[500px]">

          <div className="mb-8">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
              <div className="w-2 h-4 bg-white ml-1 rounded-sm"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
  Discover Your Next Favorite Book
</h1>
<p className="text-white/80 mb-8 text-lg">
  Organize, explore, and manage your personal library with ease. 
  Whether you're adding new books or revisiting classics, 
  we make cataloging simple and enjoyable.
</p>
<button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition">
  Explore Library
</button>

        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-10">
          <div className="w-full max-w-sm bg-white/20 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-white/30">
            <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow">Sign in</h2>
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full mb-6 flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <g>
                  <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5c10.5 0 19.5-8.5 19.5-19.5 0-1.3-.1-2.7-.3-4z"/>
                  <path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 17.1 19.4 14.5 24 14.5c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4.5 24 4.5c-7.2 0-13.3 4.1-16.7 10.2z"/>
                  <path fill="#FBBC05" d="M24 45.5c5.6 0 10.5-1.9 14.3-5.2l-6.6-5.4c-2 1.4-4.6 2.1-7.7 2.1-6.1 0-11.3-4.1-13.2-9.6l-7 5.4C6.7 41.1 14.7 45.5 24 45.5z"/>
                  <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-3.1 0-5.7-2-6.7-4.7l-7 5.4C15.5 41.1 19.4 45.5 24 45.5c5.6 0 10.5-1.9 14.3-5.2l-6.6-5.4c-2 1.4-4.6 2.1-7.7 2.1-6.1 0-11.3-4.1-13.2-9.6l-7 5.4C6.7 41.1 14.7 45.5 24 45.5z"/>
                </g>
              </svg>
              Sign in with Google
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.currentTarget as any).email.value;
                const password = (e.currentTarget as any).password.value;
                signIn("credentials", { email, password, callbackUrl: "/" });
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-white/80 mb-1 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  required
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
                  placeholder="Your password"
                  required
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

            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-white/70 hover:text-white text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-white text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-white text-xl">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}