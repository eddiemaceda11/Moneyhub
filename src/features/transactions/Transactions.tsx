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
              <select
                name=""
                id=""
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="az">A to Z</option>
                <option value="za">Z to A</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
