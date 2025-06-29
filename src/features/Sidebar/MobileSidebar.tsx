import './MobileSidebar.css';
import sidebarOverviewIcon from '/images/icon-nav-overview.svg';
import sidebarTransactionsIcon from '/images/icon-nav-transactions.svg';
import sidebarBudgetsIcon from '/images/icon-nav-budgets.svg';
import sidebarPotsIcon from '/images/icon-nav-pots.svg';
import sidebarRecurringBillsIcon from '/images/icon-nav-recurring-bills.svg';
// import sidebarMinimizeMenuIcon from '/images/icon-minimize-menu.svg';
import { Link } from 'react-router';

export const MobileSidebar = () => {
  return (
    <div className='mobile-sidebar'>
      <nav className='mobile-sidebar_nav--container'>
        <Link to='/'>
          <div className='mobile-sidebar_nav--item'>
            <img
              src={sidebarOverviewIcon}
              alt=''
            />
          </div>
        </Link>
        <Link to='/transactions'>
          <div className='mobile-sidebar_nav--item'>
            <img
              src={sidebarTransactionsIcon}
              alt=''
            />
          </div>
        </Link>
        <Link to='/budgets'>
          <div className='mobile-sidebar_nav--item'>
            <img
              src={sidebarBudgetsIcon}
              alt=''
            />
          </div>
        </Link>
        <Link to='/pots'>
          <div className='mobile-sidebar_nav--item'>
            <img
              src={sidebarPotsIcon}
              alt=''
            />
          </div>
        </Link>
        <Link to='/recurring'>
          <div className='mobile-sidebar_nav--item'>
            <img
              src={sidebarRecurringBillsIcon}
              alt=''
            />
          </div>
        </Link>
      </nav>
    </div>
  );
};
