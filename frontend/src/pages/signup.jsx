import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    alert("Sign up successful!");
    navigate("/"); // Redirect to login after sign up
  };

  const handleSignIn = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 fixed top-0 left-0">
      <div className="flex w-full h-full max-w-none md:max-w-4xl md:h-[500px] rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Sign In */}
        <div className="flex-1 bg-[#28577b] text-white flex flex-col items-center justify-center p-10">
          <FaBook className="text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">BookWorm LIBRARY</h2>
          <p className="mb-6 text-center text-sm">
            Already have Account? Sign in here.
          </p>
          <button
            onClick={handleSignIn}
            className="bg-[#4db6ac] text-black px-8 py-2 rounded font-semibold"
          >
            SIGN IN
          </button>
        </div>
        {/* Right Side - Sign Up */}
        <div className="flex-1 bg-[#f7f9d7] p-10 flex flex-col justify-center relative">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
            <FaBook className="text-2xl text-teal-700 mb-2" />
            <p className="text-sm text-gray-600 mb-4">
              Please provide your information to sign up
            </p>
          </div>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-1/2 border rounded px-4 py-2"
                required
              />
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-1/2 border rounded px-4 py-2"
                required
              />
            </div>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full border rounded px-4 py-2"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded px-4 py-2"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border rounded px-4 py-2"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-600 text-black py-2 rounded font-semibold"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}