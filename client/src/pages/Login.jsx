import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", formData);

      login(data);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F7FB] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-sm">
        {/* Left Side */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Welcome Back</h1>

          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            Log in to continue managing your projects, tasks, and productivity
            with TaskFlow.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-2xl bg-[#F6F7FB] mb-4 outline-none"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-4 rounded-2xl bg-[#F6F7FB] mb-6 outline-none"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-2xl font-medium hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-black">
              Create Account
            </Link>
          </p>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex bg-[#EEF2F6] p-12 items-center justify-center">
          <div className="w-full max-w-sm">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">TaskFlow</h2>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-yellow-50 rounded-2xl p-3">
                  <p className="text-xs text-gray-500">Tasks</p>
                  <h3 className="text-2xl font-bold">24</h3>
                </div>

                <div className="bg-blue-50 rounded-2xl p-3">
                  <p className="text-xs text-gray-500">Active</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>

                <div className="bg-green-50 rounded-2xl p-3">
                  <p className="text-xs text-gray-500">Done</p>
                  <h3 className="text-2xl font-bold">8</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  Design Dashboard
                </div>

                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  Complete Tasks
                </div>

                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  Deploy Project
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
