import { OverviewBudgetsCategoryItem } from "./OverviewBudgetsCategoryItem";
import { OverviewBudgetsPieChart } from "./OverviewBudgetsPieChart";

export const OverviewBudgets = ({ budgetData }: any) => {
  const renderedBudgetData = budgetData.map((budgetObject: any) => {
    return (
      <OverviewBudgetsCategoryItem
        budgetData={budgetObject}
        key={budgetObject.category}
      />
    );
  });

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
        <div className="osbc-right">{renderedBudgetData}</div>
      </div>
    </div>
  );
};
