import { useState } from "react";

const CreateTaskModal = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  const handleCreate = () => {
    if (!formData.title.trim()) return;

    onCreate(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">Create New Task</h2>

        <input
          type="text"
          placeholder="Task Title"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl mb-4"
        />

        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl mb-4"
        />

        <select
          value={formData.priority}
          onChange={(e) =>
            setFormData({
              ...formData,
              priority: e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl mb-4"
        >
          <option>low</option>
          <option>medium</option>
          <option>high</option>
        </select>

        <input
          type="date"
          value={formData.dueDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              dueDate: e.target.value,
            })
          }
          className="w-full border p-3 rounded-xl mb-6"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2 rounded-xl border">
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="bg-black text-white px-5 py-2 rounded-xl"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
