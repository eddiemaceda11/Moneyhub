export const IndividualTransaction = ({ transactionsData }: any) => {
  // TODO -> move into a utils folder
  function configureImgPath(image: string): string {
    return image.slice(8);
  }

  function checkIfAmountIsNegative(amount: string) {
    const firstCharOfString = amount.split("").shift();
    if (firstCharOfString === "-") {
      let modifiedAmount = amount.slice(0, 1) + "$" + amount.slice(1);
      return <p className="negative-transaction">{modifiedAmount}</p>;
    } else {
      let modifiedAmount = "+$" + amount;
      return <p className="positive-transaction">{modifiedAmount}</p>;
    }
  }

  return (
    <>
      <div>
        <div className="oti-left">
          <img
            src={configureImgPath(transactionsData.avatar)}
            alt=""
          />
          <p>{transactionsData.name}</p>
        </div>
        <div className="oti-right">
          {checkIfAmountIsNegative(transactionsData.amount)}
          <span>19 Aug 2024</span>
        </div>
      </div>
      {transactionsData.name === "Urban Services Hub" ? "" : <div className="oti-line"></div>}
    </>
  );
};
