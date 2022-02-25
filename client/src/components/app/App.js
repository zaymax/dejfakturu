import "./App.scss";
import Form from "../form/Form.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from "../homepage/Homepage";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/create-invoice">Create invoice</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/create-invoice" element={<Form />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
