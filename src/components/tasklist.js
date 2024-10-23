import { useState } from "react";
export default function TaskList({ task }) {
  const [status, setStatus] = useState(false);
  function toggleStatus() {
    setStatus(!status);
  }
  return (
    <div>
      <div className="flex gap-5">
        {status ? (
          <button onClick={() => toggleStatus()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              width="24px"
              height="24px"
            >
              <path
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M9 16.2l-3.5-3.5-1.42 1.42L9 19l9-9-1.42-1.42z" />
            </svg>
          </button>
        ) : (
          <button onClick={() => toggleStatus()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              stroke-width="2"
              width="24px"
              height="24px"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
                ry="2"
              />
            </svg>
          </button>
        )}
        <p className={status ? "line-through" : ""}>{task}</p>
      </div>
    </div>
  );
}
