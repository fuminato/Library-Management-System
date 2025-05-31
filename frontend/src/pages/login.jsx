import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Admin: username "admin" and password "1111"
    if (form.username === "admin" && form.password === "1111") {
      onLogin("admin");
    } else {
      onLogin("user");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgotpass");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 fixed top-0 left-0">
      <div className="flex w-full h-full max-w-none md:max-w-4xl md:h-[600px] rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Login */}
        <div className="flex-1 bg-[#f7f9d7] p-10 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-6">
            <FaBook className="text-4xl text-teal-700 mb-2" />
            <h2 style={{ color: "black" }}>Welcome Back !!</h2>
            <p className="text-sm text-gray-600 mb-4">
              Please enter your credentials to login
            </p>
          </div>
          <form onSubmit={handleSignIn} className="space-y-4">
            <input
              type="text"
              name="username"
              value={form.username}
              style={{ color: "black" }}
              onChange={handleChange}
              placeholder="Username"
              className="w-full border rounded px-4 py-2"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              style={{ color: "black" }}
              placeholder="Password"
              className="w-full border rounded px-4 py-2"
              required
            />
            
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-xs text-gray-600 hover:underline bg-transparent p-0"
                style={{ outline: "none", border: "none" }}
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded font-semibold mt-2"
            >
              SIGN IN
            </button>
          </form>
        </div>
        {/* Right Side - Sign Up */}
        <div className="flex-1 bg-[#28577b] text-white flex flex-col items-center justify-center p-10">
          <FaBook className="text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">BookWorm LIBRARY</h2>
          <p className="mb-6 text-center text-sm">
            New at our portal? Sign up to get started!
          </p>
          <button
            onClick={handleSignUp}
            className="bg-[#4db6ac] text-black px-8 py-2 rounded font-semibold"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}