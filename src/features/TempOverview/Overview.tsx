import { useGetOverviewQuery } from "../../services/overviewApi";
import "./overview.css";

import { useBalanceData } from "../../hooks/useBalanceData";
import { usePotsData } from "../../hooks/usePotsData";
import { useTransactionsData } from "../../hooks/useTransactionsData";

import { useBudgetData } from "../../hooks/useBudgetData";
import { OverviewTransactions } from "./components/OverviewTransactions/OverviewTransaction";
import { OverviewBudgets } from "./components/OverviewBudgets/OverviewBudgets";
import { OverviewPots } from "./components/OverviewPots/OverviewPots";
import { OverviewRecurring } from "./components/OverviewRecurring/OverviewRecurring";

export const Overview = () => {
  const { data, error, isLoading } = useGetOverviewQuery(undefined);

  console.log(data);
  const balanceData = useBalanceData(data?.balance);
  const potsData = usePotsData(data?.pots);
  const transactionsData = useTransactionsData(data?.transactions);
  const budgetData = useBudgetData(data?.budgets);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;
  if (!data) return null;

  return (
    <>
      {/* OVERVIEW HEADER */}
      <h1 className="overview-title">Overview</h1>
      <div className="overview-info-container">
        <div>
          <h4>Current Balance</h4>
          <p>${balanceData.current}</p>
        </div>
        <div>
          <h4>Income</h4>
          <p>${balanceData.income}</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p>${balanceData.expenses}</p>
        </div>
      </div>

      {/* OVERVIEW CONTENT */}
      <section className="additionals-section">
        {/* LEFT SIDE OF THE OVERVIEW CONTENT (TOP ON MOBILE) */}
        <div className="additionals-section-left">
          <OverviewPots potsData={potsData} />
          <OverviewTransactions transactionsData={transactionsData} />
        </div>
        {/* RIGHT SIDE OF THE OVERVIEW CONTENT (BOTTOM ON MOBILE) */}
        <div className="additionals-section-right">
          <OverviewBudgets budgetData={budgetData} />
          {/* RECURRING BILLS */}
          <OverviewRecurring />
        </div>
      </section>
    </>
  );
};
