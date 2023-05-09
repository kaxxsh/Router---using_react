import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");

  const handleClick = () => {
    axios
      .post("http://localhost:3000/add", { Name: Name, age: Age })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} />
        <button onClick={handleClick}>test</button>
      </div>
    </>
  );
}

export default App;
