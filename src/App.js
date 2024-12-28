import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import TaskManagement from "./pages/TaskManagement";
import Calendar from "./pages/Calendar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Smart Task Manager</h1>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/tasks" component={TaskManagement} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
