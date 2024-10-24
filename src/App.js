import TaskList from "./components/tasklist";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  function AddTask() {
    if (inputValue !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  }
  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks); // Update state with the new array
  };
  return (
    <div className="flex justify-center items-center w-full h-screen md:h-auto">
      <div className="rounded-md flex flex-col md:flex-row w-full h-full">
        <div className="md:w-1/2 flex flex-col gap-5 items-center h-1/2 md:h-auto">
          <div className="flex flex-col justify-between bg-cyan-300 p-5 w-full">
            <p className="text-xl font-medium text-center">TODO</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            {tasks.map((task, index) => (
              <div className="flex gap-5 items-center justify-center text-lg">
                <TaskList
                  key={index}
                  task={task}
                />
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors duration-300"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between md:w-1/2 items-center">
          <div className="flex flex-col gap-5  items-center w-full">
            <div className="flex flex-col justify-between bg-cyan-300 w-full p-5">
              <p className="text-xl font-medium text-center">Add Tasks</p>
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <p className="text-lg">Enter the task</p>
              <input
                name="task"
                placeholder="Enter the task"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="p-2 rounded-md border-2 w-64"
              />
            </div>
            <button
              onClick={() => AddTask()}
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
