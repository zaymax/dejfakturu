import "../styles/reset.scss";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import { Homepage } from "../pages/homepage/Homepage";
import { About } from "../pages/about/About";
import { Prices } from "../pages/prices/Prices";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { Dashboard } from "../pages/dashboard/Dashboard";
import Form from "../components/form/Form";
import useToken from "./useToken";

function App() {
  const { token, setToken, removeToken } = useToken();

  return (
    <Router>
      <nav className="">
        <div className="menu">
          <h1 className="menu__logo">Dejfakturu.cz - (alpha)</h1>
          <ul className="menu__links">
            <li className="menu__link">
              <Link to="/" className="menu__link-text">
                Homepage
              </Link>
            </li>
            <li className="menu__link">
              <Link to="/create-invoice" className="menu__link-text">
                Create invoice
              </Link>
            </li>
            <li className="menu__link">
              <Link to="/about" className="menu__link-text">
                About
              </Link>
            </li>
            <li className="menu__link">
              <Link to="/prices" className="menu__link-text">
                Prices
              </Link>
            </li>
            <li className="menu__link">
              <Link to="/dashboard" className="menu__link-text">
                Dashboard
              </Link>
            </li>
            {!token && (
              <li className="menu__link">
                <Link to="/login" className="menu__link-text">
                  Login
                </Link>
              </li>
            )}
            {token && (
              <li className="menu__link">
                <Link to="/login" className="menu__link-text">
                  <button onClick={removeToken}>Logout</button>
                </Link>
              </li>
            )}

            <li className="menu__link">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/create-invoice" element={<Form />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/prices" element={<Prices />} />
          <Route
            path="/login"
            element={
              token ? <Navigate to="/" /> : <Login setToken={setToken} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </nav>
    </Router>
  );
}

export default App;
