import React, { useState } from "react";
import "./App.css";
import Form from "./components/FormComponent"; // ✅ Imported

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My React App</h1>

      {/* ✅ This line FIXES your error */}
      <Counter />
      <Form />   {/* ✅ You MUST use Form like this */}

    </div>
  );
}

export default App;
