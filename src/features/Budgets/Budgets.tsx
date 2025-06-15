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
        <div className='budgets-graph-container'>
          <div className='budgets-graph'>
            <div
              className='budgets-outer-graph'
              style={{
                background: `conic-gradient(#3bd1f6 ${30}%, #e5e7eb ${30}% 85%, red 85%)`,
                borderRadius: '50%',
                clipPath: 'circle(50% at 50% 50%)',
              }}
            >
              <div className='budgets-middle-graph'>
                <div className='budgets-inner-graph'></div>
              </div>
            </div>
          </div>
          <div className='budgets-spending'></div>
        </div>
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
                  <p>→</p>
                </div>
              </div>
              <div className='latest-spending-body'>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
                <div className='break-line'></div>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
                <div className='break-line'></div>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <p>→</p>
                </div>
              </div>
              <div className='latest-spending-body'>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
                <div className='break-line'></div>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
                <div className='break-line'></div>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <p>→</p>
                </div>
              </div>
              <div className='latest-spending-body'>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
                <div className='break-line'></div>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
                <div className='break-line'></div>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <p>→</p>
                </div>
              </div>
              <div className='latest-spending-body'>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
                <div className='break-line'></div>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
                <div className='break-line'></div>
                <div className='budget-transaction-container'>
                  <div className='budget-transaction-container-left'>
                    <img></img>
                    <p>Eddie Maceda</p>
                  </div>
                  <div className='budget-transaction-container-right'>
                    <p>-$5.00</p>
                    <p>11 Aug 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
