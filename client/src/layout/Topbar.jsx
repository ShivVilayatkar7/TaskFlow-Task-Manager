import { Bell, Search, Menu } from "lucide-react";

const Topbar = ({ user, setIsOpen }) => {
  return (
    <div className="bg-white rounded-3xl px-4 md:px-8 py-4 md:py-5 flex items-center justify-between shadow-sm gap-4">
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50"
      >
        <Menu size={20} />
      </button>

      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search"
          className="
            w-full
            bg-gray-50
            border-0
            rounded-2xl
            py-3
            pl-12
            pr-4
            outline-none
            focus:ring-2
            focus:ring-gray-200
          "
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 md:gap-5 shrink-0">
        <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition">
          <Bell size={18} />
        </button>

        <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-black text-white flex items-center justify-center font-semibold">
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
