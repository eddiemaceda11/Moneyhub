import './transactions.css';
import { useState } from 'react';

const transactions = [
  { name: 'Aiden Murphy', category: 'Groceries', date: '18 Jan 2025', amount: -42.9 },
  { name: 'Jasmine Lee', category: 'Dining', date: '03 Mar 2025', amount: -28.75 },
  { name: 'Leo Patterson', category: 'Utilities', date: '15 Feb 2025', amount: -120.0 },
  { name: 'Sophia Wang', category: 'Travel', date: '28 Jan 2025', amount: -350.0 },
  { name: 'Ethan Cruz', category: 'Income', date: '10 Feb 2025', amount: 1200.0 },
  { name: 'Maya Bennett', category: 'Health', date: '20 Mar 2025', amount: -60.25 },
  { name: 'Nathan Kim', category: 'Shopping', date: '01 Feb 2025', amount: -89.99 },
  { name: 'Chloe Martinez', category: 'Subscriptions', date: '22 Feb 2025', amount: -14.99 },
  { name: 'Lucas Anderson', category: 'Entertainment', date: '05 Mar 2025', amount: -47.5 },
  { name: 'Lily Thompson', category: 'Salary', date: '01 Mar 2025', amount: 2500.0 },
  { name: 'Olivia Scott', category: 'Groceries', date: '12 Mar 2025', amount: -76.23 },
  { name: 'Benjamin Hall', category: 'Dining', date: '07 Mar 2025', amount: -34.8 },
  { name: 'Ava Mitchell', category: 'Utilities', date: '10 Mar 2025', amount: -98.65 },
  { name: 'William Rivera', category: 'Travel', date: '03 Mar 2025', amount: -420.0 },
  { name: 'Emma Torres', category: 'Income', date: '28 Feb 2025', amount: 850.0 },
  { name: 'James Ramirez', category: 'Health', date: '15 Mar 2025', amount: -70.0 },
  { name: 'Amelia Brooks', category: 'Shopping', date: '02 Mar 2025', amount: -129.5 },
  { name: 'Logan Kelly', category: 'Subscriptions', date: '18 Feb 2025', amount: -12.99 },
  { name: 'Isabella Cooper', category: 'Entertainment', date: '14 Mar 2025', amount: -39.99 },
  { name: 'Michael Bailey', category: 'Salary', date: '28 Feb 2025', amount: 2400.0 },
  { name: 'Charlotte Hughes', category: 'Groceries', date: '25 Feb 2025', amount: -56.0 },
  { name: 'Daniel Foster', category: 'Dining', date: '22 Feb 2025', amount: -18.45 },
  { name: 'Harper Simmons', category: 'Utilities', date: '20 Feb 2025', amount: -105.0 },
  { name: 'Elijah Butler', category: 'Travel', date: '16 Feb 2025', amount: -300.0 },
  { name: 'Abigail Jenkins', category: 'Income', date: '13 Feb 2025', amount: 900.0 },
  { name: 'Henry Barnes', category: 'Health', date: '11 Feb 2025', amount: -50.3 },
  { name: 'Ella Price', category: 'Shopping', date: '08 Feb 2025', amount: -75.0 },
  { name: 'Jack Perry', category: 'Subscriptions', date: '06 Feb 2025', amount: -9.99 },
  { name: 'Scarlett Russell', category: 'Entertainment', date: '04 Feb 2025', amount: -60.0 },
  { name: 'Sebastian Bell', category: 'Salary', date: '01 Feb 2025', amount: 2300.0 },
  { name: 'Emily Coleman', category: 'Groceries', date: '30 Jan 2025', amount: -67.45 },
  { name: 'Alexander Long', category: 'Dining', date: '28 Jan 2025', amount: -23.99 },
  { name: 'Grace West', category: 'Utilities', date: '26 Jan 2025', amount: -115.25 },
  { name: 'Mason Hayes', category: 'Travel', date: '24 Jan 2025', amount: -380.0 },
  { name: 'Aria Morales', category: 'Income', date: '20 Jan 2025', amount: 1100.0 },
  { name: 'Logan Peterson', category: 'Health', date: '18 Jan 2025', amount: -45.9 },
  { name: 'Zoe Warren', category: 'Shopping', date: '15 Jan 2025', amount: -99.99 },
  { name: 'Luke Diaz', category: 'Subscriptions', date: '13 Jan 2025', amount: -11.99 },
  { name: 'Layla Stevens', category: 'Entertainment', date: '11 Jan 2025', amount: -35.0 },
  { name: 'Matthew Ross', category: 'Salary', date: '09 Jan 2025', amount: 2450.0 },
  { name: 'Victoria Reed', category: 'Groceries', date: '06 Jan 2025', amount: -55.25 },
  { name: 'Joseph Patterson', category: 'Dining', date: '04 Jan 2025', amount: -22.5 },
  { name: 'Aubrey Powell', category: 'Utilities', date: '02 Jan 2025', amount: -130.0 },
  { name: 'David Hughes', category: 'Travel', date: '30 Dec 2024', amount: -410.0 },
  { name: 'Penelope Flores', category: 'Income', date: '28 Dec 2024', amount: 950.0 },
  { name: 'Owen Sanders', category: 'Health', date: '26 Dec 2024', amount: -65.0 },
  { name: 'Hannah Rivera', category: 'Shopping', date: '24 Dec 2024', amount: -85.75 },
  { name: 'Jayden Cox', category: 'Subscriptions', date: '22 Dec 2024', amount: -13.5 },
  { name: 'Nora Gray', category: 'Entertainment', date: '20 Dec 2024', amount: -40.0 },
];

export const Transaction = () => {
  const [searchTransaction, setSearchTransaction] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
  const [sortBy, setSortBy] = useState('latest'); // latest, oldest, az, za, highest, lowest

  /*************************/
  /*** Helper functions ****/
  /*************************/
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchTransaction(newValue);
    console.log(newValue);

    // Filter transactions based on the search input
    const filtered = transactions.filter((transaction) => {
      return transaction.name.toLowerCase().includes(newValue.toLowerCase());
    });

    setFilteredTransactions(filtered);
  };

  const updateSortBy = (sortOption: string) => {
    setSortBy(sortOption);
    let sortedArray;

    switch (sortOption) {
      case 'latest':
        setFilteredTransactions(transactions);
        break;
      case 'az':
        sortedArray = filteredTransactions.sort((a, b) => a.name.localeCompare(b.name));
        setFilteredTransactions(sortedArray);
        break;
      case 'za':
        let tempSortedArray = filteredTransactions.sort((a, b) => a.name.localeCompare(b.name));
        sortedArray = tempSortedArray.reverse();
        setFilteredTransactions(sortedArray);
        break;
      // case 'lowest':
      //   sortedArray = filteredTransactions.sort((a, b) => convertCurrenciesToNumbers(a.amount) - convertCurrenciesToNumbers(b.amount));
    }
  };

  return (
    <>
      <h1 className='transactions-title'>Transactions</h1>
      <div className='transactions-content-container'>
        {/* TOP MENU */}
        <div className='transactions-menu'>
          <div className='searchbar'>
            <input
              type='text'
              onChange={handleSearchChange}
              value={searchTransaction}
            />
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
          <div className='filters-container'>
            <div className='transactions_sort-by'>
              <p>Sort by</p>
              <select
                name=''
                id=''
                onChange={(e) => updateSortBy(e.target.value)}
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
          {filteredTransactions.map((transaction, index) => {
            return (
              <>
                <div className='transactions_table--transaction'>
                  <div className='recipient_sender'>
                    <img
                      src=''
                      alt=''
                    />
                    <p>{transaction.name}</p>
                  </div>
                  <p className='transactions_category'>{transaction.category}</p>
                  <p className='transaction_date'>{transaction.date}</p>
                  <p className='transaction_amount'>{transaction.amount}</p>
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
