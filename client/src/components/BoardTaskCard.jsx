import { useState, useEffect, useRef } from "react";

const BoardTaskCard = ({ task, onStatusChange, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const priorityColors = {
    high: "bg-red-100 text-red-600",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-600",
  };

  const statusLabels = {
    pending: "To Do",
    "in-progress": "In Progress",
    completed: "Done",
  };

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
      {/* Header */}
      <div
        ref={menuRef}
        className="flex justify-between items-center mb-4 relative"
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              task.priority === "high"
                ? "bg-red-500"
                : task.priority === "medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
            }`}
          />

          <span
            className={`text-xs px-3 py-1 rounded-full ${
              priorityColors[task.priority]
            }`}
          >
            {task.priority}
          </span>
        </div>

        {task.status && (
          <>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-black transition"
            >
              ⋯
            </button>

            {showMenu && (
              <div className="absolute right-0 top-8 bg-white shadow-lg rounded-xl border border-gray-100 w-44 z-10">
                {task.status === "pending" && (
                  <button
                    onClick={() => {
                      onStatusChange(task, "in-progress");
                      setShowMenu(false);
                    }}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-50"
                  >
                    Move to In Progress
                  </button>
                )}

                {task.status === "in-progress" && (
                  <button
                    onClick={() => {
                      onStatusChange(task, "completed");
                      setShowMenu(false);
                    }}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-50"
                  >
                    Move to Done
                  </button>
                )}

                <button
                  onClick={() => {
                    onDelete(task._id);
                    setShowMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-red-500 hover:bg-red-50"
                >
                  Delete Task
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2 tracking-tight text-gray-900">
        {task.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {task.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due Date"}
        </span>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            task.status === "completed"
              ? "bg-green-100 text-green-600"
              : task.status === "in-progress"
                ? "bg-blue-100 text-blue-600"
                : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {statusLabels[task.status]}
        </span>
      </div>
    </div>
  );
};

export default BoardTaskCard;
