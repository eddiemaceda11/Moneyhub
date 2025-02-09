export const IndividualTransaction = ({ transactionsData }: any) => {
  // TODO -> move into a utils folder
  function configureImgPath(image: string): string {
    return image.slice(8);
  }

  console.log("transactionsData:", transactionsData);

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
          <p>+79.80</p>
          <span>19 Aug 2024</span>
        </div>
      </div>
      {transactionsData.name === "Urban Services Hub" ? "" : <div className="oti-line"></div>}
    </>
  );
};
