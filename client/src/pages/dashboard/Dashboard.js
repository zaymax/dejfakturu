import { t } from "i18next";
import "./dashboard.scss";

export function Dashboard() {
  return (
    <div className="page">
      <div className="sidebar">
        <nav>
          <ul>
            <li>{t("Dashboard")}</li>
            <li>{t("Invoices")}</li>
            <li>{t("Create invoice")}</li>
            <li>{t("Contacts")}</li>
            <li>{t("Reports")}</li>
            <li>{t("Settings")}</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <p>{t("Content")}</p>
        <p>Dashboard page</p>
      </div>
    </div>
  );
}
