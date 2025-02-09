import { IndividualTransaction } from "./IndividualTransaction";
import emmaImage from "/images/avatars/emma-richardson.jpg";

export const OverviewTransactions = ({ transactionsData }: any) => {
  // TODO -> move into a utils folder
  function configureImgPath(image: string): string {
    return image.slice(8);
  }

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
