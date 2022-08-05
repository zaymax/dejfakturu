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
      <div className="">
        <div className="menu">
          <h1 className="menu__logo">Dejfakturu.cz</h1>
          <ul className="menu__links">
            <li className="menu__link">
              <Link to="/">Homepage</Link>
            </li>
            <li className="menu__link">
              <Link to="/create-invoice">Create invoice</Link>
            </li>
            <li className="menu__link">
              <Link to="/about">About</Link>
            </li>
            <li className="menu__link">
              <Link to="/prices">Prices</Link>
            </li>
            <li className="menu__link">
              <Link to="/login">Login</Link>
            </li>
            <li className="menu__link">
              <Link to="/register">Register</Link>
            </li>
            <li className="menu__link">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

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
