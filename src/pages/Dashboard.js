import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskService from "../services/TaskService";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    TaskService.getAllTasks().then((response) => setTasks(response.data));
  }, []);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDragStart={handleDragStart} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
