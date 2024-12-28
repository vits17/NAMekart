import axios from "axios";

const API_URL = "/api/tasks";

const getAllTasks = () => {
  return axios.get(API_URL);
};

const createTask = (task) => {
  return axios.post(API_URL, task);
};

const updateTask = (id, task) => {
  return axios.put(`${API_URL}/${id}`, task);
};

const deleteTask = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default { getAllTasks, createTask, updateTask, deleteTask };
