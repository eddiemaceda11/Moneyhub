import { useGetOverviewQuery } from "../../services/overviewApi";
import "./overview.css";

import { useBalanceData } from "../../hooks/useBalanceData";
import { usePotsData } from "../../hooks/usePotsData";
import { useTransactionsData } from "../../hooks/useTransactionsData";

import { JarIcon } from "./JarIcon";

import { useBudgetData } from "../../hooks/useBudgetData";
import { OverviewTransactions } from "./components/OverviewTransactions/OverviewTransaction";
import { OverviewBudgets } from "./components/OverviewBudgets/OverviewBudgets";

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
          {/* POTS */}
          <div className="overview-section-pots">
            <div className="overview-pots-header">
              <h3>Pots</h3>
              <p>See Details</p>
            </div>
            <div className="overview-pots-info">
              <div className="ov-pots-total-saved">
                <JarIcon />
                <div className="opts-info">
                  <p>Total Saved</p>
                  <span>$850</span>
                </div>
              </div>
              <div className="ov-pots-info-boxes">
                <div className="opib-top">
                  <div className="opib-top-left">
                    <div className="opib-border one"></div>
                    <div className="opib-items">
                      <p>{potsData[1].name}</p>
                      <span>${potsData[1].total}</span>
                    </div>
                  </div>
                  <div className="opib-top-right">
                    <div className="opib-border two"></div>
                    <div className="opib-items">
                      <p>{potsData[2].name}</p>
                      <span>${potsData[2].total}</span>
                    </div>
                  </div>
                </div>
                <div className="opib-bottom">
                  <div className="opib-bottom-left">
                    <div className="opib-border three"></div>
                    <div className="opib-items">
                      <p>{potsData[3].name}</p>
                      <span>${potsData[3].total}</span>
                    </div>
                  </div>
                  <div className="opib-bottom-right">
                    <div className="opib-border four"></div>
                    <div className="opib-items">
                      <p>{potsData[4].name}</p>
                      <span>${potsData[4].total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TRANSACTIONS */}
          <OverviewTransactions transactionsData={transactionsData} />
        </div>

        {/* RIGHT SIDE OF THE OVERVIEW CONTENT (BOTTOM ON MOBILE) */}
        <div className="additionals-section-right">
          {/* BUDGETS */}
          <OverviewBudgets budgetData={budgetData} />
          {/* RECURRING BILLS */}
          <div className="overview-section-recurring">
            <div className="osr-header">
              <h3>Recurring Bills</h3>
              <div>
                <p>See Details</p>
                <span>x</span>
              </div>
            </div>
            <div className="osr-content">
              <div>
                <p>Paid Bills</p>
                <span>$190.00</span>
              </div>
              <div>
                <p>Total Upcoming</p>
                <span>$194.98</span>
              </div>
              <div>
                <p>Due Soon</p>
                <span>$59.48</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
