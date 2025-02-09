import emmaImage from "/images/avatars/emma-richardson.jpg";

export const OverviewTransactions = ({ transactionsData }: any) => {
  // TODO -> move into a utils folder
  function configureImgPath(image: string): string {
    return image.slice(8);
  }

  return (
    <div className="overview-section-transaction">
      <header>
        <h3>Transactions</h3>
        <div className="transaction-viewall">
          <p>View All</p>
          <span></span>
        </div>
      </header>
      <div className="overview-transactions-info">
        <div>
          <div className="oti-left">
            <img
              src={configureImgPath(transactionsData[0].avatar)}
              alt=""
            />
            <p>{transactionsData[0].name}</p>
          </div>
          <div className="oti-right">
            {/* <p>+{transactionsData[0].amount}</p> */}
            <p>+79.80</p>
            <span>19 Aug 2024</span>
            {/* <span>{transactionsData[0].date}</span> */}
          </div>
        </div>
        <div className="oti-line"></div>
        <div>
          <div className="oti-left">
            <img
              src={configureImgPath(transactionsData[1].avatar)}
              alt=""
            />
            <p>{transactionsData[1].name}s</p>
          </div>
          <div className="oti-right">
            <p>+75.50</p>
            <span>19 Aug 2024</span>
          </div>
        </div>
        <div className="oti-line"></div>
        <div>
          <div className="oti-left">
            <img
              src={emmaImage}
              alt=""
            />
            <p>Emma Richardson</p>
          </div>
          <div className="oti-right">
            <p>+75.50</p>
            <span>19 Aug 2024</span>
          </div>
        </div>
        <div className="oti-line"></div>
        <div>
          <div className="oti-left">
            <img
              src={emmaImage}
              alt=""
            />
            <p>Emma Richardson</p>
          </div>
          <div className="oti-right">
            <p>+75.50</p>
            <span>19 Aug 2024</span>
          </div>
        </div>
        <div className="oti-line"></div>
        <div>
          <div className="oti-left">
            <img
              src={emmaImage}
              alt=""
            />
            <p>Emma Richardson</p>
          </div>
          <div className="oti-right">
            <p>+75.50</p>
            <span>19 Aug 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};
