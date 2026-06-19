import { LayoutDashboard, KanbanSquare, Settings, LogOut } from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Board",
      path: "/board",
      icon: KanbanSquare,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:sticky
          top-0 left-0
          z-50
          w-72
          h-screen
          bg-white
          flex
          flex-col
          transform
          transition-transform
          duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-900">TaskFlow</h1>

          <p className="text-xs text-gray-400 mt-1">Project Management</p>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                    active
                      ? "bg-gray-100 text-black font-semibold"
                      : "text-gray-500 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Logout */}
        <div className="mt-auto p-6 border-t border-gray-200">
          <button
            onClick={() => {
              setIsOpen(false);
              logout();
              navigate("/login");
            }}
            className="flex items-center gap-3 text-gray-500 hover:text-black transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
