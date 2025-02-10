import "./transactions.css";

export const Transaction = () => {
  return (
    <>
      <h1 className="transactions-title">Transactions</h1>
      <div className="transactions-content-container">
        <div className="transactions-menu">
          <div className="searchbar">
            <input type="text" />
            <p>p</p>
          </div>
          <div className="filters-container">
            <div className="transactions_sort-by">
              <p>Sort by</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
