import './transactions.css';

export const Transaction = () => {
  return (
    <>
      <h1 className='transactions-title'>Transactions</h1>
      <div className='transactions-content-container'>
        {/* TOP MENU */}
        <div className='transactions-menu'>
          <div className='searchbar'>
            <input type='text' />
            <p>p</p>
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
          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Emma Richardson</p>
            </div>
            <p className='transactions_category'>General</p>
            <p className='transaction_date'>07 Feb 2025</p>
            <p className='transaction_amount'>+$75.50</p>
          </div>
        </div>
      </div>
    </>
  );
};
