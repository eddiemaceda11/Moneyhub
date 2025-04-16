import './sidebar.css';
import sidebarOverviewIcon from '/images/icon-nav-overview.svg';
import sidebarTransactionsIcon from '/images/icon-nav-transactions.svg';
import sidebarBudgetsIcon from '/images/icon-nav-budgets.svg';
import sidebarPotsIcon from '/images/icon-nav-pots.svg';
import sidebarRecurringBillsIcon from '/images/icon-nav-recurring-bills.svg';
import sidebarMinimizeMenuIcon from '/images/icon-minimize-menu.svg';
import { useState } from 'react';
import { Link } from 'react-router';

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={sidebarOpen ? 'sidebar sidebar-open' : 'sidebar sidebar-closed'}>
      <header className='sidebar-header'>{sidebarOpen ? <h2>moneyhub</h2> : <h2>m</h2>}</header>
      <nav className='sidebar-nav'>
        <Link to='/'>
          <div className='sidebar-nav-item'>
            <img
              src={sidebarOverviewIcon}
              alt=''
            />
            <p>Overview</p>
          </div>
        </Link>
        <Link to='/transactions'>
          <div className='sidebar-nav-item'>
            <img
              src={sidebarTransactionsIcon}
              alt=''
            />
            <p>Transactions</p>
          </div>
        </Link>
        <Link to='/budgets'>
          <div className='sidebar-nav-item'>
            <img
              src={sidebarBudgetsIcon}
              alt=''
            />
            <p>Budgets</p>
          </div>
        </Link>
        <Link to='/pots'>
          <div className='sidebar-nav-item'>
            <img
              src={sidebarPotsIcon}
              alt=''
            />
            <p>Pots</p>
          </div>
        </Link>
        <Link to='recurring'>
          <div className='sidebar-nav-item'>
            <img
              src={sidebarRecurringBillsIcon}
              alt=''
            />
            <p>Recurring Bills</p>
          </div>
        </Link>
      </nav>
      <footer onClick={() => setSidebarOpen(!sidebarOpen)}>
        <img
          className={sidebarOpen ? '' : 'menu-closed'}
          src={sidebarMinimizeMenuIcon}
          alt=''
        />
        <p>Minimize Menu</p>
      </footer>
    </div>
  );
};
