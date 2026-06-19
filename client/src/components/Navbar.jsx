import { CheckSquare } from "lucide-react";

const Navbar = ({ user, handleLogout }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 shadow-lg flex justify-between items-center">
      <div className="flex items-center gap-3">
        <CheckSquare size={30} />

        <h1 className="text-2xl font-bold">TaskFlow</h1>
      </div>

      <div className="flex items-center gap-4">
        <span>{user?.name}</span>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
