import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const tasks = [
  {
    task: 'Clean Room',
    id: 1234,
    completed: false,
  },

  {
    task: 'Code',
    id: 2345,
    completed: false,
  },

  {
    task: 'Win',
    id: 3456,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  toggleTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Task List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
