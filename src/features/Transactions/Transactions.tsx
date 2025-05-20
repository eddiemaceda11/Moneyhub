import './transactions.css';
import { useState } from 'react';
import { formatCurrency } from '../../utils/formatters';
import { transactionsSortBy } from './utils/transactionsSortBy';
import { transactions } from './transactionsData';

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
                onChange={(e) => {
                  if (e.target.value === 'all') {
                    setFilteredTransactions(transactions);
                  } else {
                    setFilteredTransactions(transactionsSortBy(e.target.value, filteredTransactions));
                  }
                }}
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
                  <p className='transaction_amount'>{formatCurrency(transaction.amount)}</p>
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
