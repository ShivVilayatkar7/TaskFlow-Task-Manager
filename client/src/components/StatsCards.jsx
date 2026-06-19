const StatsCards = ({ tasks }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-gray-500">Total Tasks</h3>
        <p className="text-4xl font-bold mt-2">{tasks.length}</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-gray-500">Pending</h3>
        <p className="text-4xl font-bold mt-2">
          {tasks.filter((task) => task.status !== "completed").length}
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-gray-500">Completed</h3>
        <p className="text-4xl font-bold mt-2">
          {tasks.filter((task) => task.status === "completed").length}
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
