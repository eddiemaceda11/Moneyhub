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
              <p>Aiden Murphy</p>
            </div>
            <p className='transactions_category'>Groceries</p>
            <p className='transaction_date'>18 Jan 2025</p>
            <p className='transaction_amount'>-$42.90</p>
          </div>
          <hr className='transaction_table--horizontal-line'></hr>

          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Jasmine Lee</p>
            </div>
            <p className='transactions_category'>Dining</p>
            <p className='transaction_date'>03 Mar 2025</p>
            <p className='transaction_amount'>-$28.75</p>
          </div>
          <hr className='transaction_table--horizontal-line'></hr>

          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Leo Patterson</p>
            </div>
            <p className='transactions_category'>Utilities</p>
            <p className='transaction_date'>15 Feb 2025</p>
            <p className='transaction_amount'>-$120.00</p>
          </div>
          <hr className='transaction_table--horizontal-line'></hr>

          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Sophia Wang</p>
            </div>
            <p className='transactions_category'>Travel</p>
            <p className='transaction_date'>28 Jan 2025</p>
            <p className='transaction_amount'>-$350.00</p>
          </div>
          <hr className='transaction_table--horizontal-line'></hr>

          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Ethan Cruz</p>
            </div>
            <p className='transactions_category'>Income</p>
            <p className='transaction_date'>10 Feb 2025</p>
            <p className='transaction_amount'>+$1,200.00</p>
          </div>
          <hr className='transaction_table--horizontal-line'></hr>

          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Maya Bennett</p>
            </div>
            <p className='transactions_category'>Health</p>
            <p className='transaction_date'>20 Mar 2025</p>
            <p className='transaction_amount'>-$60.25</p>
          </div>
          <hr className='transaction_table--horizontal-line'></hr>

          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Nathan Kim</p>
            </div>
            <p className='transactions_category'>Shopping</p>
            <p className='transaction_date'>01 Feb 2025</p>
            <p className='transaction_amount'>-$89.99</p>
          </div>
          <hr className='transaction_table--horizontal-line'></hr>

          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Chloe Martinez</p>
            </div>
            <p className='transactions_category'>Subscriptions</p>
            <p className='transaction_date'>22 Feb 2025</p>
            <p className='transaction_amount'>-$14.99</p>
          </div>
          <hr className='transaction_table--horizontal-line'></hr>

          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Lucas Anderson</p>
            </div>
            <p className='transactions_category'>Entertainment</p>
            <p className='transaction_date'>05 Mar 2025</p>
            <p className='transaction_amount'>-$47.50</p>
          </div>
          <hr className='transaction_table--horizontal-line'></hr>

          <div className='transactions_table--transaction'>
            <div className='recipient_sender'>
              <img
                src=''
                alt=''
              />
              <p>Lily Thompson</p>
            </div>
            <p className='transactions_category'>Salary</p>
            <p className='transaction_date'>01 Mar 2025</p>
            <p className='transaction_amount'>+$2,500.00</p>
          </div>
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
