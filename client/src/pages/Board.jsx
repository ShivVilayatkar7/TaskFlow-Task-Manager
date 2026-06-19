import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";
import BoardTaskCard from "../components/BoardTaskCard";
import { Plus, MoreHorizontal } from "lucide-react";
import CreateTaskModal from "../components/CreateTaskModal";
import { getTasks, createTask, updateTask } from "../services/taskService";
import { deleteTask } from "../services/taskService";

const Board = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks(user.token);

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (task, newStatus) => {
    try {
      const updatedTask = await updateTask(
        task._id,
        {
          ...task,
          status: newStatus,
        },
        user.token,
      );

      setTasks(tasks.map((t) => (t._id === task._id ? updatedTask : t)));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id, user.token);

      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const newTask = await createTask(
        {
          ...taskData,
          status: "pending",
        },
        user.token,
      );

      setTasks([newTask, ...tasks]);

      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const todoTasks = tasks.filter((task) => task.status === "pending");
  const progressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="flex bg-[#F6F7FB] min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 p-4 md:p-6 lg:p-10 overflow-x-hidden">
        <Topbar user={user} setIsOpen={setIsOpen} />

        <div className="mt-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <h1 className="text-4xl font-bold tracking-tight">Board</h1>

            <button
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto bg-black text-white px-7 py-3 rounded-2xl font-medium shadow-sm hover:shadow-md transition"
            >
              + New Task
            </button>
          </div>

          <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 snap-x scrollbar-hide">
            {/* TO DO */}
            <div className="bg-[#EEF2F6] rounded-3xl p-5 min-h-[650px] min-w-[90vw] lg:min-w-0 snap-start shrink-0">
              <div className="mb-5">
                <h2 className="font-semibold text-lg tracking-tight">
                  To Do ({todoTasks.length})
                </h2>
              </div>

              <div className="space-y-4">
                {todoTasks.map((task) => (
                  <BoardTaskCard
                    key={task._id}
                    task={task}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDeleteTask}
                  />
                ))}
                {todoTasks.length === 0 && (
                  <div className="bg-white rounded-2xl p-5 text-center text-gray-400">
                    No tasks
                  </div>
                )}
              </div>
            </div>

            {/* IN PROGRESS */}
            <div className="bg-[#EEF2F6] rounded-3xl p-5 min-h-[650px] min-w-[90vw] lg:min-w-0 snap-start shrink-0">
              <div className="mb-5">
                <h2 className="font-semibold text-lg tracking-tight">
                  In Progress ({progressTasks.length})
                </h2>
              </div>

              <div className="space-y-4">
                {progressTasks.map((task) => (
                  <BoardTaskCard
                    key={task._id}
                    task={task}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDeleteTask}
                  />
                ))}

                {progressTasks.length === 0 && (
                  <div className="bg-white rounded-2xl p-5 text-center text-gray-400">
                    No tasks
                  </div>
                )}
              </div>
            </div>

            {/* DONE */}
            <div className="bg-[#EEF2F6] rounded-3xl p-5 min-h-[650px] min-w-[90vw] lg:min-w-0 snap-start shrink-0">
              <div className="mb-5">
                <h2 className="font-semibold text-lg tracking-tight">
                  Done ({doneTasks.length})
                </h2>
              </div>

              <div className="space-y-4">
                {doneTasks.map((task) => (
                  <BoardTaskCard
                    key={task._id}
                    task={task}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDeleteTask}
                  />
                ))}

                {doneTasks.length === 0 && (
                  <div className="bg-white rounded-2xl p-5 text-center text-gray-400">
                    No tasks
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <CreateTaskModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreateTask}
        />
      )}
    </div>
  );
};

export default Board;
