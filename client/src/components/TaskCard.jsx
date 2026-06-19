const TaskCard = ({
  task,
  toggleStatus,
  handleDelete,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
      <h3 className="font-bold text-xl text-gray-800">
        {task.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {task.description}
      </p>

      <div className="mt-3">
        <span
          className={`px-3 py-1 rounded-full text-sm text-white ${
            task.status === "Completed"
              ? "bg-green-500"
              : task.status === "in-progress"
              ? "bg-blue-500"
              : "bg-yellow-500"
          }`}
        >
          {task.status}
        </span>
      </div>

      <div className="mt-3">
  <span
    className={`px-3 py-1 rounded-full text-sm text-white ${
      task.priority === "High"
        ? "bg-red-500"
        : task.priority === "Medium"
        ? "bg-orange-500"
        : "bg-green-500"
    }`}
  >
    {task.priority}
  </span>
</div>

      <p className="text-sm text-gray-500">
        Due:
        {task.dueDate
          ? ` ${new Date(task.dueDate).toLocaleDateString()}`
          : " Not Set"}
      </p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => toggleStatus(task)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Toggle Status
        </button>

        <button
          onClick={() => handleDelete(task._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;