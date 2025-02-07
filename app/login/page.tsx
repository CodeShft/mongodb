"use client";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showGlow, setShowGlow] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    setMessage("Successfully ✅");
    setShowGlow(true);
    setEmail("");
    setPassword("");

    setTimeout(() => {
      setMessage("");
      setShowGlow(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-yellow-300 p-6 rounded-lg shadow-lg w-full sm:max-w-md mt-16 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 p-3 w-full border rounded-md focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 p-3 w-full border rounded-md focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-md text-white transition-all duration-300 ${
              showGlow
                ? "bg-green-500 border-4 border-green-500 shadow-xl shadow-green-500/50"
                : "bg-orange-600 hover:bg-orange-500 border-4 border-orange-600"
            }`}
          >
            {message ? (
              <span className="text-white font-medium">{message}</span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="text-orange-600 hover:text-orange-500"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
