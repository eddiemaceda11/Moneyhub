import './budgets.css';
import ellipsis from '/images/icon-ellipsis.svg';

export const Budgets = () => {
  return (
    <>
      <div className='budgets-header'>
        <h1>Budgets</h1>
        <button>+Add New Budget</button>
      </div>
      <div className='budgets_content--container'>
        <div className='budgets-graph'>Hello</div>
        <div className='budgets_categories--container'>
          <div className='budgets_categories--container-item'>
            <div className='header-container'>
              <div className='header-container-left'>
                <div className='category-color'></div>
                <p>Entertainment</p>
              </div>
              <img src={ellipsis}></img>
            </div>
            <div className='budget-bar-container'>
              <div className='maximum-container'>
                <p>Maximum of $50</p>
              </div>
              <div className='progress-bar-container'>
                <div className='progress-bar'></div>
              </div>
              <div className='spent-remaining-container'>
                <div className='spent-container'>
                  <div className='bar'></div>
                  <div className='spent-amt-container'>
                    <span>Spent</span>
                    <p>$15.00</p>
                  </div>
                </div>
                <div className='remaining-container'>
                  <div className='bar-remaining'></div>
                  <div className='remaining-amt-container'>
                    <span>Remaining</span>
                    <p>$35.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='latest-spending-container'>
              <div className='latest-spending-header-container'>
                <p>Latest Spending</p>
                <div>
                  <span>See All</span>
                </div>
              </div>
            </div>
          </div>
          <div>Bills</div>
          <div>Groceries</div>
          <div>Savings</div>
        </div>
      </div>
    </>
  );
};
