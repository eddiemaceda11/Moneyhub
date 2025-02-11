export const OverviewBudgetsCategoryItem = ({ budgetData }: any) => {
  return (
    <div className="osbc-category-div">
      <div className="osbc-category-left-border"></div>
      <div className="osbc-category-container">
        <div className="osbc-category">{budgetData.category}</div>
        <div className="osbc-category-amount">${budgetData.maximum}</div>
      </div>
    </div>
  );
};
