import './transactions.css';
import { useState } from 'react';

const transactions = [
  { name: 'Aiden Murphy', category: 'Groceries', date: '18 Jan 2025', amount: '-$42.90' },
  { name: 'Jasmine Lee', category: 'Dining', date: '03 Mar 2025', amount: '-$28.75' },
  { name: 'Leo Patterson', category: 'Utilities', date: '15 Feb 2025', amount: '-$120.00' },
  { name: 'Sophia Wang', category: 'Travel', date: '28 Jan 2025', amount: '-$350.00' },
  { name: 'Ethan Cruz', category: 'Income', date: '10 Feb 2025', amount: '+$1,200.00' },
  { name: 'Maya Bennett', category: 'Health', date: '20 Mar 2025', amount: '-$60.25' },
  { name: 'Nathan Kim', category: 'Shopping', date: '01 Feb 2025', amount: '-$89.99' },
  { name: 'Chloe Martinez', category: 'Subscriptions', date: '22 Feb 2025', amount: '-$14.99' },
  { name: 'Lucas Anderson', category: 'Entertainment', date: '05 Mar 2025', amount: '-$47.50' },
  { name: 'Lily Thompson', category: 'Salary', date: '01 Mar 2025', amount: '+$2,500.00' },
  { name: 'Olivia Scott', category: 'Groceries', date: '12 Mar 2025', amount: '-$76.23' },
  { name: 'Benjamin Hall', category: 'Dining', date: '07 Mar 2025', amount: '-$34.80' },
  { name: 'Ava Mitchell', category: 'Utilities', date: '10 Mar 2025', amount: '-$98.65' },
  { name: 'William Rivera', category: 'Travel', date: '03 Mar 2025', amount: '-$420.00' },
  { name: 'Emma Torres', category: 'Income', date: '28 Feb 2025', amount: '+$850.00' },
  { name: 'James Ramirez', category: 'Health', date: '15 Mar 2025', amount: '-$70.00' },
  { name: 'Amelia Brooks', category: 'Shopping', date: '02 Mar 2025', amount: '-$129.50' },
  { name: 'Logan Kelly', category: 'Subscriptions', date: '18 Feb 2025', amount: '-$12.99' },
  { name: 'Isabella Cooper', category: 'Entertainment', date: '14 Mar 2025', amount: '-$39.99' },
  { name: 'Michael Bailey', category: 'Salary', date: '28 Feb 2025', amount: '+$2,400.00' },
  { name: 'Charlotte Hughes', category: 'Groceries', date: '25 Feb 2025', amount: '-$56.00' },
  { name: 'Daniel Foster', category: 'Dining', date: '22 Feb 2025', amount: '-$18.45' },
  { name: 'Harper Simmons', category: 'Utilities', date: '20 Feb 2025', amount: '-$105.00' },
  { name: 'Elijah Butler', category: 'Travel', date: '16 Feb 2025', amount: '-$300.00' },
  { name: 'Abigail Jenkins', category: 'Income', date: '13 Feb 2025', amount: '+$900.00' },
  { name: 'Henry Barnes', category: 'Health', date: '11 Feb 2025', amount: '-$50.30' },
  { name: 'Ella Price', category: 'Shopping', date: '08 Feb 2025', amount: '-$75.00' },
  { name: 'Jack Perry', category: 'Subscriptions', date: '06 Feb 2025', amount: '-$9.99' },
  { name: 'Scarlett Russell', category: 'Entertainment', date: '04 Feb 2025', amount: '-$60.00' },
  { name: 'Sebastian Bell', category: 'Salary', date: '01 Feb 2025', amount: '+$2,300.00' },
  { name: 'Emily Coleman', category: 'Groceries', date: '30 Jan 2025', amount: '-$67.45' },
  { name: 'Alexander Long', category: 'Dining', date: '28 Jan 2025', amount: '-$23.99' },
  { name: 'Grace West', category: 'Utilities', date: '26 Jan 2025', amount: '-$115.25' },
  { name: 'Mason Hayes', category: 'Travel', date: '24 Jan 2025', amount: '-$380.00' },
  { name: 'Aria Morales', category: 'Income', date: '20 Jan 2025', amount: '+$1,100.00' },
  { name: 'Logan Peterson', category: 'Health', date: '18 Jan 2025', amount: '-$45.90' },
  { name: 'Zoe Warren', category: 'Shopping', date: '15 Jan 2025', amount: '-$99.99' },
  { name: 'Luke Diaz', category: 'Subscriptions', date: '13 Jan 2025', amount: '-$11.99' },
  { name: 'Layla Stevens', category: 'Entertainment', date: '11 Jan 2025', amount: '-$35.00' },
  { name: 'Matthew Ross', category: 'Salary', date: '09 Jan 2025', amount: '+$2,450.00' },
  { name: 'Victoria Reed', category: 'Groceries', date: '06 Jan 2025', amount: '-$55.25' },
  { name: 'Joseph Patterson', category: 'Dining', date: '04 Jan 2025', amount: '-$22.50' },
  { name: 'Aubrey Powell', category: 'Utilities', date: '02 Jan 2025', amount: '-$130.00' },
  { name: 'David Hughes', category: 'Travel', date: '30 Dec 2024', amount: '-$410.00' },
  { name: 'Penelope Flores', category: 'Income', date: '28 Dec 2024', amount: '+$950.00' },
  { name: 'Owen Sanders', category: 'Health', date: '26 Dec 2024', amount: '-$65.00' },
  { name: 'Hannah Rivera', category: 'Shopping', date: '24 Dec 2024', amount: '-$85.75' },
  { name: 'Jayden Cox', category: 'Subscriptions', date: '22 Dec 2024', amount: '-$13.50' },
  { name: 'Nora Gray', category: 'Entertainment', date: '20 Dec 2024', amount: '-$40.00' },
];

export const Transaction = () => {
  const [searchTransaction, setSearchTransaction] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <h1 className='transactions-title'>Transactions</h1>
      <div className='transactions-content-container'>
        {/* TOP MENU */}
        <div className='transactions-menu'>
          <div className='searchbar'>
            <input type='text' />
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
          <div className='filters-container'>
            <div className='transactions_sort-by'>
              <p>Sort by</p>
              <select
                name=''
                id=''
              >
                <option value='latest'>Latest</option>
                <option value='oldest'>Oldest</option>
                <option value='az'>A to Z</option>
                <option value='za'>Z to A</option>
                <option value='highest'>Highest</option>
                <option value='lowest'>Lowest</option>
              </select>
            </div>
            <div className='transactions_categories'>
              <p>Category</p>
              <select>
                <option value='all'>All Transactions</option>
                <option value='entertainment'>Entertainment</option>
                <option value='groceries'>Groceries</option>
                <option value='bills'>Bills</option>
                <option value='dining'>Dining out</option>
                <option value='personal'>Personal care</option>
              </select>
            </div>
          </div>
        </div>

        {/* TABLE HEADER */}
        <div className='transactions_table-header'>
          <p>Recipient/Sender</p>
          <p>Category</p>
          <p>Transaction Date</p>
          <p>Amount</p>
        </div>

        {/* TRANSACTIONS TABLE */}
        <div className='transactions_table'>
          {/* INDIVIDUAL TRANSACTION */}
          {transactions.map((transaction, index) => {
            return (
              <>
                <div className='transactions_table--transaction'>
                  <div className='recipient_sender'>
                    <img
                      src=''
                      alt=''
                    />
                    <p>Aiden Murphy</p>
                  </div>
                  <p className='transactions_category'>Groceries</p>
                  <p className='transaction_date'>18 Jan 2025</p>
                  <p className='transaction_amount'>-$42.90</p>
                </div>
                <hr className='transaction_table--horizontal-line'></hr>
              </>
            );
          })}
        </div>

        {/* TRANSACTIONS TABLE NAVIGATION */}
        <div className='transactions_table--navigation'>
          <div className='transactions_nav--button-container'>
            <button>
              <span>←</span> Prev
            </button>
          </div>
          <div className='transaction_nav--pages'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <div className='transactions_nav--button-container'>
            <button>
              Next <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
