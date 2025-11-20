import { useEffect, useState } from "react";
import { api } from "../services/api";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Load profile and tasks from API
  async function loadData() {
    const user = await api.authGet("/users/me");
    setProfile(user);

    const taskList = await api.authGet("/tasks");
    setTasks(taskList);
  }

  // Add new task
  async function addTask() {
    if (!title.trim()) return;

    try {
      const newTask = await api.authPost("/tasks", { title: title.trim() });
      setTasks(prev => [newTask, ...prev]); // update state locally
      setTitle("");
    } catch (err) {
      console.error(err);
      alert("Failed to add task");
    }
  }

  // Delete task
  async function deleteTask(id) {
    try {
      await api.authDelete(`/tasks/${id}`);
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete task");
    }
  }

  // Logout
  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <Navbar />
      {/* Add new task */}
      <div className="mb-6 bg-gray-800 p-4 rounded shadow">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Add new task..."
            className="flex-1 p-2 bg-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 px-4 rounded font-semibold"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>

      {/* Tasks list */}
      <div className="grid gap-3">
        {tasks.map(task => (
          <div
            key={task._id}
            className="bg-gray-800 p-3 rounded flex justify-between items-center shadow"
          >
            <span
              className={`font-bold ${
                task.completed ? "line-through text-gray-400" : "text-gray-200"
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-400 hover:text-red-600 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
