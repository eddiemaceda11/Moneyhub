import { OverviewBudgetsPieChart } from "./OverviewBudgetsPieChart";

export const OverviewBudgets = ({ budgetData }: any) => {
  return (
    <div className="overview-section-budgets">
      <div className="osb-header">
        <h3>Budgets</h3>
        <p>See Details</p>
      </div>
      <div className="osb-content">
        <div className="osbc-left">
          <OverviewBudgetsPieChart />
        </div>
        <div className="osbc-right">
          <div className="osbc-category-div">
            <div className="osbc-category-left-border"></div>
            <div className="osbc-category-container">
              <div className="osbc-category">{budgetData[0].category}</div>
              <div className="osbc-category-amount">${budgetData[0].maximum}</div>
            </div>
          </div>
          <div className="osbc-category-div">
            <div className="osbc-category-left-border"></div>
            <div className="osbc-category-container">
              <div className="osbc-category">Bills</div>
              <div className="osbc-category-amount">$750.00</div>
            </div>
          </div>
          <div className="osbc-category-div">
            <div className="osbc-category-left-border"></div>
            <div className="osbc-category-container">
              <div className="osbc-category">Dining Out</div>
              <div className="osbc-category-amount">$75.00</div>
            </div>
          </div>
          <div className="osbc-category-div">
            <div className="osbc-category-left-border"></div>
            <div className="osbc-category-container">
              <div className="osbc-category">Personal Care</div>
              <div className="osbc-category-amount">$100.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
