import { useEffect, useState } from "react";
import "./App.css";

const data = [{ item: "poptarts" }, { item: "peppers" }];

function App() {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    async function load() {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      await Promise.resolve();
      setGroceries(data);
    }
    load();
  }, []);

  return (
    <div className="App">
      <h2 data-testid="title">Groceries</h2>
      {groceries.length > 0 && (
        <ul data-testid="grocery-list">
          {groceries.map((groc, i) => {
            return <li key={i}>{groc.item}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
