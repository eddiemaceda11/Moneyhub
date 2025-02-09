export const IndividualTransaction = ({ transactionsData }: any) => {
  // TODO -> move into a utils folder
  function configureImgPath(image: string): string {
    return image.slice(8);
  }

  return (
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
  );
};
