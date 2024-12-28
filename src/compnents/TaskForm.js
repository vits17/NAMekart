import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ task, onSave }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [priority, setPriority] = useState(task ? task.priority : "Low");
  const [status, setStatus] = useState(task ? task.status : "Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { title, description, priority, status };

    if (task) {
      axios.put(`/api/tasks/${task.id}`, taskData).then(onSave);
    } else {
      axios.post("/api/tasks", taskData).then(onSave);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">{task ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
