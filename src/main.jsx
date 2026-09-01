import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Application() {
  const [tasks, setTask] = useState([
    { name: "Create React app" },
    { name: "Create new task" },
    { name: "Mark task as done" },
  ]);
  const [name, setName] = useState("");
  return (
    <>
      <h1>My task application</h1>
      <ul>
        {tasks.map((t) => (
          <li>{t.name}</li>
        ))}
      </ul>
      <h2>new tasck</h2>
      <form action="">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button>save {name}</button>
        </div>
      </form>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Application />);
