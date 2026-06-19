import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";

import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => task.status === "pending").length;
  const [isOpen, setIsOpen] = useState(false);

  const progressTasks = tasks.filter(
    (task) => task.status === "in-progress",
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  const upcomingTasks = [...tasks]
    .filter((task) => task.dueDate)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks(user.token);

      setTasks(data);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex bg-[#F6F7FB] min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 p-4 md:p-6 lg:p-10">
        <Topbar user={user} setIsOpen={setIsOpen} />

        <div className="mt-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>

            <p className="text-gray-500 mt-2">
              Overview of your projects and tasks
            </p>
          </div>

                      {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-6 mb-10">
              <h2 className="font-semibold text-xl mb-5">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/board")}
                  className="w-full bg-black text-white py-3 rounded-2xl font-medium"
                >
                  + Create Task
                </button>

                <button
                  className="w-full bg-[#EEF2F6] py-3 rounded-2xl font-medium"
                  onClick={() => navigate("/board")}
                >
                  Open Board
                </button>

                <button
                  className="w-full bg-[#EEF2F6] py-3 rounded-2xl font-medium"
                  onClick={() => navigate("/settings")}
                >
                  Settings
                </button>
              </div>
            </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-3xl p-6 hover:shadow-md transition">
              <p className="text-gray-400 text-sm">Total Tasks</p>
              <h3 className="text-4xl font-bold mt-2">{totalTasks}</h3>
            </div>

            <div className="bg-white rounded-3xl p-6 hover:shadow-md transition">
              <p className="text-gray-400 text-sm">To Do</p>
              <h3 className="text-4xl font-bold mt-2">{pendingTasks}</h3>
            </div>

            <div className="bg-white rounded-3xl p-6 hover:shadow-md transition">
              <p className="text-gray-400 text-sm">In Progress</p>
              <h3 className="text-4xl font-bold mt-2">{progressTasks}</h3>
            </div>

            <div className="bg-white rounded-3xl p-6 hover:shadow-md transition">
              <p className="text-gray-400 text-sm">Completed</p>
              <h3 className="text-4xl font-bold mt-2">{completedTasks}</h3>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Upcoming Tasks */}
            <div className="bg-white rounded-3xl p-6">
              <h2 className="font-semibold text-xl mb-5">Upcoming Tasks</h2>

              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div
                    key={task._id}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#F8F9FC] hover:bg-[#EEF2F6] transition cursor-pointer"
                  >
                    <div>
                      <p className="font-medium">{task.title}</p>

                      <p className="text-xs text-gray-400 mt-1">
                        Due {new Date(task.dueDate).toLocaleDateString()}
                      </p>
                    </div>

                    <div
                      className={`px-3 py-1 rounded-full text-xs ${
                        task.priority === "high"
                          ? "bg-red-100 text-red-600"
                          : task.priority === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-600"
                      }`}
                    >
                      {task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)}
                    </div>
                  </div>
                ))}

                {upcomingTasks.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    No upcoming tasks
                  </div>
                )}
              </div>
            </div>

            {/* Recent Tasks */}
            <div className="bg-white rounded-3xl p-6">
              <h2 className="font-semibold text-xl mb-5">
                My Tasks ({tasks.length})
              </h2>

              <div className="space-y-4">
                {tasks.slice(0, 5).map((task) => (
                  <div
                    key={task._id}
                    className="flex items-center justify-between py-3 border-b border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${
                          task.status === "completed"
                            ? "bg-yellow-400 border-yellow-400"
                            : "border-gray-400"
                        }`}
                      />
                      <span className="font-medium">{task.title}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          task.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : task.status === "in-progress"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {task.status === "pending"
                          ? "To Do"
                          : task.status === "in-progress"
                            ? "In Progress"
                            : "Completed"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Summary */}
            <div className="bg-white rounded-3xl p-6">
              <h2 className="font-semibold text-xl mb-5">Activity Summary</h2>

              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-3xl p-6">
                  <p className="text-sm text-gray-500">Total Tasks</p>
                  <h3 className="text-3xl font-bold mt-1">{totalTasks}</h3>
                </div>

                <div className="bg-blue-50 rounded-3xl p-6">
                  <p className="text-sm text-gray-500">Active Tasks</p>
                  <h3 className="text-3xl font-bold mt-1">
                    {pendingTasks + progressTasks}
                  </h3>
                </div>

                <div className="bg-green-50 rounded-3xl p-6">
                  <p className="text-sm text-gray-500">Completion Rate</p>

                  <h3 className="text-3xl font-bold mt-1">
                    {totalTasks
                      ? Math.round((completedTasks / totalTasks) * 100)
                      : 0}
                    %
                  </h3>
                </div>
              </div>
            </div>

            {/* Priority Distribution */}
            <div className="bg-white rounded-3xl p-6 xl:col-span-2">
              <h2 className="font-semibold text-xl mb-5">
                Priority Distribution
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 rounded-2xl p-5 hover:shadow-sm transition">
                  <p className="text-red-500">High</p>
                  <h3 className="text-2xl font-bold">
                    {tasks.filter((t) => t.priority === "high").length}
                  </h3>
                </div>

                <div className="bg-yellow-50 rounded-2xl p-5 hover:shadow-sm transition">
                  <p className="text-yellow-600">Medium</p>
                  <h3 className="text-2xl font-bold">
                    {tasks.filter((t) => t.priority === "medium").length}
                  </h3>
                </div>

                <div className="bg-green-50 rounded-2xl p-5 hover:shadow-sm transition">
                  <p className="text-green-600">Low</p>
                  <h3 className="text-2xl font-bold">
                    {tasks.filter((t) => t.priority === "low").length}
                  </h3>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
