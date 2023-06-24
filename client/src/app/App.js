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
import { MenuItem } from "../components/menu-item/MenuItem";

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
              {token && <MenuItem link="/" text={t("Dashboard")} />}
              {!token && <MenuItem link="/" text={t("Homepage")} />}
              <MenuItem link="/create-invoice" text={t("Create invoice")} />
              {!token && <MenuItem link="/about" text={t("About")} />}
              {!token && <MenuItem link="/prices" text={t("Prices")} />}
              {!token && <MenuItem link="/login" text={t("Login")} />}
              {token && (
                <MenuItem link="/login">
                  <button onClick={removeToken}>{t("Logout")}</button>
                </MenuItem>
              )}

              {!token && <MenuItem link="/register" text={t("Register")} />}
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
