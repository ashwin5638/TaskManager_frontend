import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const TaskForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  const [err, setErr] = useState("");

  useEffect(() => {
    if (!isEdit) return;

    const load = async () => {
      try {
        const res = await api.get(`/api/tasks`);
        const task = res.data.find((t) => t._id === id);

        if (!task) {
          setErr("Task not found");
          return;
        }

        setForm({
          title: task.title,
          description: task.description,
          status: task.status,
        });
      } catch (error) {
        setErr("Failed to load task");
      }
    };

    load();
  }, [id, isEdit]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM SENT:", form);
    setErr("");

    try {
      if (isEdit) {
        await api.put(`/api/tasks/${id}`, form);
      } else {
        await api.post("/api/tasks", form);
      }

      navigate("/");
    } catch (error) {
      console.log(error);
      setErr("Save failed");
    }
  };

  return (
    <div className="container">
      <h1>{isEdit ? "Edit Task" : "New Task"}</h1>

      {err && <p style={{ color: "red" }}>{err}</p>}

      <form onSubmit={handleSubmit}>
        <label className="label-container">Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <label>Status</label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="pending">pending</option>
          <option value="in-progress">in-progress</option>
          <option value="completed">completed</option>
        </select>

        <button type="submit">{isEdit ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default TaskForm;
