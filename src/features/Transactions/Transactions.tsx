import './transactions.css';
import { useState } from 'react';

const transactions = [
  {
    name: 'Aiden Murphy',
    category: 'Groceries',
    date: '18 Jan 2025',
    amount: '-$42.90',
  },
  {
    name: 'Jasmine Lee',
    category: 'Dining',
    date: '03 Mar 2025',
    amount: '-$28.75',
  },
  {
    name: 'Leo Patterson',
    category: 'Utilities',
    date: '15 Feb 2025',
    amount: '-$120.00',
  },
  {
    name: 'Sophia Wang',
    category: 'Travel',
    date: '28 Jan 2025',
    amount: '-$350.00',
  },
  {
    name: 'Ethan Cruz',
    category: 'Income',
    date: '10 Feb 2025',
    amount: '+$1,200.00',
  },
  {
    name: 'Maya Bennett',
    category: 'Health',
    date: '20 Mar 2025',
    amount: '-$60.25',
  },
  {
    name: 'Nathan Kim',
    category: 'Shopping',
    date: '01 Feb 2025',
    amount: '-$89.99',
  },
  {
    name: 'Chloe Martinez',
    category: 'Subscriptions',
    date: '22 Feb 2025',
    amount: '-$14.99',
  },
  {
    name: 'Lucas Anderson',
    category: 'Entertainment',
    date: '05 Mar 2025',
    amount: '-$47.50',
  },
  {
    name: 'Lily Thompson',
    category: 'Salary',
    date: '01 Mar 2025',
    amount: '+$2,500.00',
  },
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
