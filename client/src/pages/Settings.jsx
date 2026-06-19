import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";

const Settings = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex bg-[#F6F7FB] min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 p-4 md:p-6 lg:p-10">
        <Topbar user={user} setIsOpen={setIsOpen} />

        <div className="mt-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Settings</h1>

            <p className="text-gray-500 mt-2">
              Manage your account and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl p-6 col-span-1">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <h2 className="mt-4 text-xl font-semibold">
                  {user?.name || "User"}
                </h2>

                <p className="text-gray-500 text-sm mt-1">{user?.email}</p>
              </div>
            </div>

            {/* Account Information */}
            <div className="bg-white rounded-3xl p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-6">
                Account Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="text-sm text-gray-500">Full Name</label>

                  <input
                    type="text"
                    value={user?.name || ""}
                    disabled
                    className="w-full mt-2 p-3 rounded-2xl bg-gray-100"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">Email Address</label>

                  <input
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="w-full mt-2 p-3 rounded-2xl bg-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-3xl p-6">
              <h2 className="text-xl font-semibold mb-6">Preferences</h2>

              <div className="flex items-center justify-between">
                <span>Notifications</span>

                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-6">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>

              <div className="space-y-3">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full bg-[#EEF2F6] py-3 rounded-2xl font-medium hover:bg-gray-200 transition"
                >
                  Dashboard
                </button>

                <button
                  onClick={() => navigate("/board")}
                  className="w-full bg-[#EEF2F6] py-3 rounded-2xl font-medium hover:bg-gray-200 transition"
                >
                  Board
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-3xl p-6 border border-red-100">
              <h2 className="text-xl font-semibold text-red-500 mb-6">
                Danger Zone
              </h2>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-medium transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
