import React from "react";

const TaskCard = ({ task, onDragStart }) => {
  return (
    <div
      className="task-card"
      draggable="true"
      onDragStart={(e) => onDragStart(e, task.id)}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.priority}</span>
    </div>
  );
};

export default TaskCard;
