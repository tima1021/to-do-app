import { useState } from "react";

const Task = (props) => {
  const isDone = props.status === "active" ? false : true;

  return (
    <div
      key={props.id}
      className="w-full rounded-md bg-[#F9FAFB] py-4 px-4 flex justify-between items-center "
    >
      <div className="flex gap-[10px] items-center">
        <input
          type="checkbox"
          name=""
          id=""
          className="w-5 h-5"
          checked={isDone}
          onChange={() => {
            props.checkStatus(props.id);
          }}
        />
        <p className="text-sm font-normal ">{props.text}</p>
      </div>
      <button
        onClick={() => props.deleteTask(props.id)}
        className="text-sm font-normal bg-[#FEF2F2] text-[#EF4444] rounded-md py-[6px] px-3 w-[67px] h-[30px]"
      >
        Delete
      </button>
    </div>
  );
};
export default Task;
