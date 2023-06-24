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
import { t } from "i18next";

function App() {
  const { token, setToken, removeToken } = useToken();

  return (
    <>
      <Router>
        <div className="">
          <div className="menu">
            <h1 className="menu__logo">
              <Link to="/">Dejfakturu.cz - (alpha)</Link>
            </h1>
            <ul className="menu__links">
              {token && (
                <li className="menu__link">
                  <Link to="/" className="menu__link-text">
                    Dashboard
                  </Link>
                </li>
              )}
              {!token && (
                <li className="menu__link">
                  <Link to="/" className="menu__link-text">
                    {t("Homepage")}
                  </Link>
                </li>
              )}
              <li className="menu__link">
                <Link to="/create-invoice" className="menu__link-text">
                  {t("Create invoice")}
                </Link>
              </li>
              {!token && (
                <li className="menu__link">
                  <Link to="/about" className="menu__link-text">
                    {t("About")}
                  </Link>
                </li>
              )}
              {!token && (
                <li className="menu__link">
                  <Link to="/prices" className="menu__link-text">
                    {t("Prices")}
                  </Link>
                </li>
              )}
              {!token && (
                <li className="menu__link">
                  <Link to="/login" className="menu__link-text">
                    {t("Login")}
                  </Link>
                </li>
              )}
              {token && (
                <li className="menu__link">
                  <Link to="/login" className="menu__link-text">
                    <button onClick={removeToken}>{t("Logout")}</button>
                  </Link>
                </li>
              )}

              {!token && (
                <li className="menu__link">
                  <Link to="/register">{t("Register")}</Link>
                </li>
              )}
            </ul>
          </div>

          <Routes>
            <Route path="/create-invoice" element={<Form />} />
            <Route path="/" element={token ? <Dashboard /> : <Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/prices" element={<Prices />} />
            <Route
              path="/login"
              element={
                token ? <Navigate to="/" /> : <Login setToken={setToken} />
              }
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <div className="footer">
        <a href="https://zaytsev.cz/">@ Maksim Zaytsev</a>
      </div>
    </>
  );
}

export default App;
