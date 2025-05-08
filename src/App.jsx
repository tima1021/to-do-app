import { useState } from "react";
import Button from "./components/button";
import Task from "./components/tasks";
import tasks from "./mock/tasks";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(tasks);
  const [filteredData, setFilteredData] = useState(data);

  const completedNumber = data.filter(
    (task) => task.status === "completed"
  ).length;

  const createTask = () => {
    const newTask = {
      id: Math.random(),
      text: inputValue,
      status: "active",
    };
    setData([...data, newTask]);
    setFilteredData([...data, newTask]);
    setInputValue("");
  };
  const deleteTask = (id) => {
    const filteredData = data.filter((task) => task.id !== id);
    setData(filteredData);
    // filteredClear();
    setFilteredData(filteredData);
  };
  const checkStatus = (id) => {
    const changedData = data.map((task) => {
      if (task.id === id) {
        const isDone = task.status === "active" ? false : true;
        task.status = isDone ? "active" : "completed";
        return task;
      }
      return task;
    });
    setData(changedData);
    setFilteredData(changedData);
  };
  const clearCompleted = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setData(filteredData);
    setFilteredData(filteredData);
  };

  const filterCompleted = () => {
    const filteredData = data.filter((task) => task.status === "completed");
    setFilteredData(filteredData);
  };
  const filterActive = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setFilteredData(filteredData);
  };
  const filteredClear = () => {
    setFilteredData(data);
  };
  return (
    <div className=" w-screen h-screen flex justify-center  bg-[#F3F4F6] ">
      <div className="w-[377px] size-fit  flex flex-col   gap-5 py-6 px-4 shadow-md rounded-md bg-[#fff] mt-[60px] ">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-semibold text-center text-black">
            To-Do List
          </h1>
          <div className="flex gap-[6px]">
            <input
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
              value={inputValue}
              className="h-[40px] border-[2px] border-[#71717A] rounded-md w-full py-4 px-2"
              type="text"
              placeholder="Add a new task..."
            />
            <Button handleClick={createTask} text="Add" />
          </div>
          <div className="flex gap-[6px]">
            <Button isSmall={true} text="All" handleClick={filteredClear} />
            <Button
              isSmall={true}
              isGray={true}
              text="Active"
              handleClick={filterActive}
            />
            <Button
              isSmall={true}
              isGray={true}
              text="Completed"
              handleClick={filterCompleted}
            />
          </div>
          {filteredData.map((task) => {
            return (
              <Task
                key={task.id}
                {...task}
                deleteTask={deleteTask}
                checkStatus={checkStatus}
              />
            );
          })}
          {filteredData.length === 0 && (
            <p className="text-center text-[#6b7280] text-sm my-5">
              No tasks yet. Add one above
            </p>
          )}
          <div className="flex justify-between pt-4 pb-1 border-t border-[#6B7280]">
            <p className="text-[#6B7280] font-normal text-sm">
              {completedNumber} of {data.length} tasks completed
            </p>
            <button
              onClick={clearCompleted}
              className="text-[#EF4444] font-normal text-sm "
            >
              Clear completed
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <p className="text-[#6B7280] text-xs font-normal mt-5">
            Powered by
            <a href="" className="text-[#3B73ED] text-xs font-normal">
              Pinecone academy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
