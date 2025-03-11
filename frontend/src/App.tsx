import { Button } from "@/components/ui/button";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Hello!</h1>
      <p>Django Starter Template</p>
      <Button onClick={() => setCount(count + 1)}>count is {count}</Button>
    </div>
  );
}

export default App;
