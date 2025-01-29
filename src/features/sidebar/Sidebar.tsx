import "./sidebar.css";
import sidebarOverviewIcon from "../../assets/images/icon-nav-overview.svg";

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
        <div className="sidebar-nav-item"></div>
        <div className="sidebar-nav-item"></div>
        <div className="sidebar-nav-item"></div>
        <div className="sidebar-nav-item"></div>
      </nav>
    </div>
  );
};
