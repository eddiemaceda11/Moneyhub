import './transactions.css';
import { useState } from 'react';
import { formatCurrency } from '../../utils/formatters';
import { transactionsSortBy } from './utils/transactionsSortBy';
import { selectedCategory } from './utils/transactionsSelectedCategory';
import { transactions } from './transactionsData';
import { useEffect } from 'react';

export const Transaction = () => {
  const [searchTransaction, setSearchTransaction] = useState('');
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [sortOption, setSortOption] = useState('lowest'); // latest, oldest, az, za, highest, lowest
  const [category, setCategory] = useState('All Transactions');
  const [pagination, setPagination] = useState({ start: 0, end: 10 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    searchForTransaction();
  }, [sortOption, category]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /*************************/
  /*** Helper functions ****/
  /*************************/
  const handleResize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    setWindowSize({ width: newWidth, height: newHeight });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchTransaction(newValue);
  };

  const searchForTransaction = (): undefined => {
    const searchedTransactions = transactions.filter((transaction) =>
      transaction.name.includes(searchTransaction)
    );
    const sortedTransactions = transactionsSortBy(
      sortOption,
      searchedTransactions
    );
    const finalizedTransactions = selectedCategory(
      category,
      sortedTransactions
    );
    setFilteredTransactions(finalizedTransactions);
  };

  const paginationCountButtons = () => {
    let countOfPaginationButtonsToRender = [];

    const amountOfTotalPages = Math.ceil(filteredTransactions.length / 10);

    for (let i = 0; i < amountOfTotalPages; i++) {
      countOfPaginationButtonsToRender.push(i + 1);
    }

    return countOfPaginationButtonsToRender;
  };

  const updateCurrentTransactionsRendered = (value: number) => {
    const newValue = value - 1;
    const newStartAsString = String(newValue) + '0';
    const newStartAsNumber = Number(newStartAsString);
    const newEnd = newStartAsNumber + 10;

    setPagination({ start: newStartAsNumber, end: newEnd });
  };

  const handleNextOrPrevPagination = (
    direction: 'next' | 'prev',
    itemsPerPage: number = 10
  ) => {
    const pageSize = itemsPerPage;

    if (direction === 'next') {
      if (pagination.end >= filteredTransactions.length) return;
      const newPaginationStart = pagination.start + pageSize;
      const newPaginationEnd = pagination.end + pageSize;
      setPagination({
        start: newPaginationStart,
        end: newPaginationEnd,
      });
    }

    if (direction === 'prev') {
      if (pagination.start < pageSize) return;
      const newPaginationStart = pagination.start - pageSize;
      const newPaginationEnd = pagination.end - pageSize;
      setPagination({
        start: newPaginationStart,
        end: newPaginationEnd,
      });
    }
  };

  const paginationLogicForMobileNav = (num: number) => {
    if (num < 3) return num;

    if (num === 3 && filteredTransactions.length > 4) return '...';

    if (num > 3 && num !== Math.ceil(filteredTransactions.length / 10))
      return null;

    return num;
  };

  return (
    <>
      <h1 className='transactions-title'>Transactions</h1>
      <div
        className={`transactions-content-container ${
          windowSize.width > 600 ? '' : 'hidden'
        }`}
      >
        {/* TOP MENU */}
        <div className='transactions-menu'>
          <div className='searchbar'>
            <input
              type='text'
              onChange={handleSearchChange}
              value={searchTransaction}
            />
            <button
              className='transactions_searchbar--button'
              onClick={() => searchForTransaction()}
            >
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
          <div className='filters-container'>
            <div className='transactions_sort-by'>
              <p>Sort by</p>
              <select
                name=''
                id=''
                onChange={(e) => {
                  setSortOption(e.target.value);
                  setPagination({ start: 0, end: 10 });
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
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPagination({ start: 0, end: 10 });
                }}
              >
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
          {filteredTransactions
            .slice(pagination.start, pagination.end)
            .map((transaction) => {
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
                    <p className='transactions_category'>
                      {transaction.category}
                    </p>
                    <p className='transaction_date'>{transaction.date}</p>
                    <p className='transaction_amount'>
                      {formatCurrency(transaction.amount)}
                    </p>
                  </div>
                  <hr className='transaction_table--horizontal-line'></hr>
                </>
              );
            })}
        </div>

        {/* TRANSACTIONS TABLE NAVIGATION */}
        <div className='transactions_table--navigation'>
          <div className='transactions_nav--button-container'>
            <button onClick={() => handleNextOrPrevPagination('prev')}>
              <span>←</span> Prev
            </button>
          </div>
          <div className='transaction_nav--pages'>
            {paginationCountButtons().map((paginationButton) => (
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.target as HTMLElement;
                  const paginationButtonValue = Number(target.textContent);
                  updateCurrentTransactionsRendered(paginationButtonValue);
                }}
              >
                {paginationButton}
              </button>
            ))}
          </div>
          <div className='transactions_nav--button-container'>
            <button onClick={() => handleNextOrPrevPagination('next')}>
              Next <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/************* MOBILE VIEW ***************/}

      <div
        className={`transactions-content-container ${
          windowSize.width <= 600 ? '' : 'hidden'
        }`}
      >
        {/* TOP MENU */}
        <div className='transactions-menu'>
          <div className='searchbar'>
            <input
              type='text'
              onChange={handleSearchChange}
              value={searchTransaction}
            />
            <button
              className='transactions_searchbar--button'
              onClick={() => searchForTransaction()}
            >
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
          <div className='filters-container'>
            <div className='transactions_sort-by'>
              {/* <p>Sort by</p> */}
              {/* <select
                name=''
                id=''
                onChange={(e) => {
                  setSortOption(e.target.value);
                  setPagination({ start: 0, end: 10 });
                }}
              >
                <option value='latest'>Latest</option>
                <option value='oldest'>Oldest</option>
                <option value='az'>A to Z</option>
                <option value='za'>Z to A</option>
                <option value='highest'>Highest</option>
                <option value='lowest'>Lowest</option>
              </select> */}
            </div>
            <div className='transactions_categories'>
              {/* <p>Category</p> */}
              {/* <select
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPagination({ start: 0, end: 10 });
                }}
              >
                <option value='all'>All Transactions</option>
                <option value='entertainment'>Entertainment</option>
                <option value='groceries'>Groceries</option>
                <option value='bills'>Bills</option>
                <option value='dining'>Dining out</option>
                <option value='personal'>Personal care</option>
              </select> */}
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
          {filteredTransactions
            .slice(pagination.start, pagination.end)
            .map((transaction) => {
              return (
                <>
                  <div className='transactions_table--transaction'>
                    <div className='transaction_left--mobile'>
                      <div className='recipient_sender'>
                        <img
                          src=''
                          alt=''
                        />
                        <div className='transaction_left--mobile-details'>
                          <p>{transaction.name}</p>
                          <p className='transactions_category'>
                            {transaction.category}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='transaction_right--mobile'>
                      <p className='transaction_amount'>
                        {formatCurrency(transaction.amount)}
                      </p>
                      <p className='transaction_date'>{transaction.date}</p>
                    </div>
                  </div>
                  <hr className='transaction_table--horizontal-line'></hr>
                </>
              );
            })}
        </div>
        {/* TRANSACTIONS TABLE NAVIGATION */}
        <div className='transactions_table--mobile-navigation'>
          <div className='transactions_nav--button-container'>
            <button onClick={() => handleNextOrPrevPagination('prev')}>
              <span>←</span>
            </button>
          </div>
          <div className='transaction_nav--pages'>
            {paginationCountButtons().map((paginationButton) => {
              if (paginationLogicForMobileNav(paginationButton) == null) return;

              return (
                <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    const target = e.target as HTMLElement;
                    const paginationButtonValue = Number(target.textContent);
                    updateCurrentTransactionsRendered(paginationButtonValue);
                  }}
                >
                  {/* {paginationButton} */}
                  {paginationLogicForMobileNav(paginationButton)}
                </button>
              );
            })}
          </div>
          <div className='transactions_nav--button-container'>
            <button onClick={() => handleNextOrPrevPagination('next')}>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// {/* MOBILE TRANSACTIONS TABLE */}
// <div
// className={`transactions_table ${
//   windowSize.width <= 600 ? '' : 'hidden'
// }`}
// >
// {/* INDIVIDUAL TRANSACTION */}
// {filteredTransactions
//   .slice(pagination.start, pagination.end)
//   .map((transaction, index) => {
//     return (
//       <>
//         <div className='transactions_table--transaction'>
//           <div className='transaction_left--mobile'>
//             <div className='recipient_sender'>
//               <img
//                 src=''
//                 alt=''
//               />
//               <div className='transaction_left--mobile-details'>
//                 <p>{transaction.name}</p>
//                 <p className='transactions_category'>
//                   {transaction.category}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className='transaction_right--mobile'>
//             <p className='transaction_amount'>
//               {formatCurrency(transaction.amount)}
//             </p>
//             <p className='transaction_date'>{transaction.date}</p>
//           </div>
//         </div>
//         <hr className='transaction_table--horizontal-line'></hr>
//       </>
//     );
//   })}
// </div>
