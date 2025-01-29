import "./sidebar.css";
import sidebarOverviewIcon from "../../assets/images/icon-nav-overview.svg";
import sidebarTransactionsIcon from "../../assets/images/icon-nav-transactions.svg";
import sidebarBudgetsIcon from "../../assets/images/icon-nav-budgets.svg";
import sidebarPotsIcon from "../../assets/images/icon-nav-pots.svg";
import sidebarRecurringBillsIcon from "../../assets/images/icon-nav-recurring-bills.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <h2>moneyhub</h2>
      </header>
      <nav className="sidebar-nav">
        <div className="sidebar-nav-item">
          <img
            src={sidebarOverviewIcon}
            alt=""
          />
        </div>
        <div className="sidebar-nav-item">
          <img
            src={sidebarTransactionsIcon}
            alt=""
          />
        </div>
        <div className="sidebar-nav-item">
          <img
            src={sidebarBudgetsIcon}
            alt=""
          />
        </div>
        <div className="sidebar-nav-item">
          <img
            src={sidebarPotsIcon}
            alt=""
          />
        </div>
        <div className="sidebar-nav-item">
          <img
            src={sidebarRecurringBillsIcon}
            alt=""
          />
        </div>
      </nav>
    </div>
  );
};
