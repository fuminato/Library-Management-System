import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ForgotPass() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  // Step 1: Send reset link
  const handleSend = (e) => {
    e.preventDefault();
    // Simulate sending email
    setStep(2);
  };

  // Step 2: Verify OTP
  const handleVerify = (e) => {
    e.preventDefault();
    // Simulate OTP check
    setStep(3);
  };

  // Step 3: Reset password
  const handleReset = (e) => {
    e.preventDefault();
    if (newPass === confirmPass && newPass) {
      alert("Password reset successful!");
      navigate("/"); // Redirect to login page
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 fixed top-0 left-0">
      <div className="flex w-full h-full max-w-none md:max-w-3xl md:h-[430px] rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 bg-[#28577b] text-white flex flex-col items-center justify-center p-10">
          <FaBook className="text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">BookWorm LIBRARY</h2>
          <p className="mb-6 text-center text-sm">
            "Your premier digital library for borrowing and reading books"
          </p>
        </div>
        {/* Right Side */}
        <div className="flex-1 bg-[#f7f9d7] p-10 flex flex-col justify-center relative">
          <button
            className="absolute top-4 right-4 text-gray-500 text-xl"
            onClick={() => window.history.back()}
            aria-label="Close"
          >
            ×
          </button>
          {step === 1 && (
            <>
              <div className="flex flex-col items-center mb-6">
                <FaBook className="text-2xl text-teal-700 mb-2" />
                <h2 className="text-xl font-bold mb-2">Forgot Password</h2>
              </div>
              <form onSubmit={handleSend} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border rounded px-4 py-2"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-black py-2 rounded font-semibold"
                >
                  SEND PASSWORD
                </button>
              </form>
            </>
          )}
          {step === 2 && (
            <>
              <div className="flex flex-col items-center mb-6">
                <FaBook className="text-2xl text-teal-700 mb-2" />
                <h2 className="text-xl font-bold mb-2">Check your Mailbox</h2>
                <p className="text-sm text-gray-700 mb-2">
                  Please enter the OTP you received
                </p>
              </div>
              <form onSubmit={handleVerify} className="space-y-4">
                <input
                  type="text"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  placeholder="OTP"
                  className="w-full border rounded px-4 py-2"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-black py-2 rounded font-semibold"
                >
                  VERIFY
                </button>
              </form>
            </>
          )}
          {step === 3 && (
            <>
              <div className="flex flex-col items-center mb-6">
                <FaBook className="text-2xl text-teal-700 mb-2" />
                <h2 className="text-xl font-bold mb-2">Reset Password</h2>
              </div>
              <form onSubmit={handleReset} className="space-y-4">
                <input
                  type="password"
                  value={newPass}
                  onChange={e => setNewPass(e.target.value)}
                  placeholder="New Password"
                  className="w-full border rounded px-4 py-2"
                  required
                />
                <input
                  type="password"
                  value={confirmPass}
                  onChange={e => setConfirmPass(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full border rounded px-4 py-2"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-black py-2 rounded font-semibold"
                >
                  RESET PASSWORD
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}