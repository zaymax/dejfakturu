import "./App.scss";
import Form from "../form/Form.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Homepage } from "../../pages/homepage/Homepage";
import { About } from "../../pages/about/About";
import { Prices } from "../../pages/prices/Prices";
import { Login } from "../../pages/login/Login";
import { Register } from "../../pages/register/Register";
import { Dashboard } from "../../pages/dashboard/Dashboard";

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
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/prices">Prices</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/create-invoice" element={<Form />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
