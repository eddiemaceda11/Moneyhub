import { IndividualTransaction } from "./IndividualTransaction";

export const OverviewTransactions = ({ transactionsData }: any) => {
  const overviewTransactions = transactionsData.slice(0, 5);

  const renderedOverviewTransactions = overviewTransactions.map((transaction: any) => {
    return <IndividualTransaction transactionsData={transaction} />;
  });

  return (
    <div className="overview-section-transaction">
      <header>
        <h3>Transactions</h3>
        <div className="transaction-viewall">
          <p>View All</p>
          <span></span>
        </div>
      </header>
      <div className="overview-transactions-info">{renderedOverviewTransactions}</div>
    </div>
  );
};
