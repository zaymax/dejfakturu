import { t } from "i18next";
import "./dashboard.scss";

export function Dashboard() {
  return (
    <div className="page">
      <div className="sidebar">
        <nav>
          <li>{t("Dashboard")}</li>
          <li>{t("Invoices")}</li>
          <li>{t("Create invoice")}</li>
          <li>{t("Contacts")}</li>
          <li>{t("Reports")}</li>
          <li>{t("Settings")}</li>
        </nav>
      </div>
      <div className="content">
        <p>Content</p>
      </div>
    </div>
  );
}
