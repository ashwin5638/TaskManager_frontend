import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api";

const TaskList = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const LoadTask = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/tasks");
      setTasks(res.data)
    } catch (err) {
      setError("Could not load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    LoadTask();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/tasks/${id}`);
      setTasks((prev) => prev.filter((t) => t._id !== id))
    } catch (err) {
      setError("Could not delete task");
    }
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="container">
      <h2>Task List</h2>

      <button
        onClick={() => navigate("/tasks/new")}
        style={{ marginBottom: 10 }}
      >
        + New Task
      </button>

      {tasks.length === 0 && <p>No Tasks Found</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <strong>{task.title}</strong> - {task.status}
           
            {task.owner && (
             <span style={{ marginLeft: 10 }}>
               {task.owner.name}
             </span>
           )}
            <div className="task-actions">
              <button
                className="edit-btn"
                onClick={() => navigate(`/tasks/edit/${task._id}`)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
