import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
      await API.post("/auth/register", formData);

      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F7FB] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-sm">
        {/* Left Side */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Create Account</h1>

          <p className="text-gray-500 mb-8">
            Join TaskFlow and start managing your projects, tasks, and
            productivity more efficiently.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-4 rounded-2xl bg-[#F6F7FB] mb-4 outline-none"
              onChange={handleChange}
              required
            />

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
              Create Account
            </button>
          </form>

          <p className="mt-6 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-black">
              Login
            </Link>
          </p>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex bg-[#EEF2F6] p-12 items-center justify-center">
          <div className="w-full max-w-sm">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Why TaskFlow?</h2>

              <div className="space-y-4">
                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  ✓ Organize Tasks Efficiently
                </div>

                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  ✓ Track Progress with Dashboard
                </div>

                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  ✓ Manage Work with Kanban Board
                </div>

                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  ✓ Stay Productive Every Day
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
