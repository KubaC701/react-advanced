import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/queuing">Queuing State</Link>
        </li>
        <li>
          <Link to="/imperative-vs-declarative">
            Imperative vs declarative
          </Link>
        </li>
        <li>
          <Link to="/use-ref">useRef</Link>
        </li>
        <li>
          <Link to="/use-effect">useEffect</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
