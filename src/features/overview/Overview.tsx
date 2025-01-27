import { useEffect, useState } from "react";
import { useGetOverviewQuery } from "../../services/overviewApi";
import "./overview.css";

import { JarIcon } from "./JarIcon";
import emmaImage from "../../assets/images/avatars/emma-richardson.jpg";

export const Overview = () => {
  // START balanceData logic - TODO - export this logic and state into its own file
  const [balanceData, setBalanceData] = useState({
    current: "",
    expenses: "",
    income: "",
  });

  const { data, error, isLoading } = useGetOverviewQuery(undefined);

  useEffect(() => {
    if (data) {
      const formattedCurrent = formatCurrency(data.balance.current);
      const formattedExpenses = formatCurrency(data.balance.expenses);
      const formattedCurrency = formatCurrency(data.balance.income);

      setBalanceData((prev) => ({
        ...prev,
        current: formattedCurrent,
        expenses: formattedExpenses,
        income: formattedCurrency,
      }));
    }
  }, [data]);
  // END balanceData logic

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>Error fetching data</div>;
  }

  // TODO - Move this to the hooks folder
  function formatCurrency(value: number) {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
    return formattedNumber;
  }

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
                      <p>Savings</p>
                      <span>$159</span>
                    </div>
                  </div>
                  <div className="opib-top-right">
                    <div className="opib-border two"></div>
                    <div className="opib-items">
                      <p>Gift</p>
                      <span>$40</span>
                    </div>
                  </div>
                </div>
                <div className="opib-bottom">
                  <div className="opib-bottom-left">
                    <div className="opib-border three"></div>
                    <div className="opib-items">
                      <p>Concert Ticket</p>
                      <span>$110</span>
                    </div>
                  </div>
                  <div className="opib-bottom-right">
                    <div className="opib-border four"></div>
                    <div className="opib-items">
                      <p>New Notebook</p>
                      <span>$10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TRANSACTIONS */}
          <div className="overview-section-transaction">
            <header>
              <h3>Transactions</h3>
              <div className="transaction-viewall">
                <p>View All</p>
                <span></span>
              </div>
            </header>
            <div className="overview-transactions-info">
              <div>
                <div className="oti-left">
                  <img
                    src={emmaImage}
                    alt=""
                  />
                  <p>Emma Richardson</p>
                </div>
                <div className="oti-right">
                  <p>+75.50</p>
                  <span>19 Aug 2024</span>
                </div>
              </div>
              <div className="oti-line"></div>
              <div>
                <div className="oti-left">
                  <img
                    src={emmaImage}
                    alt=""
                  />
                  <p>Emma Richardson</p>
                </div>
                <div className="oti-right">
                  <p>+75.50</p>
                  <span>19 Aug 2024</span>
                </div>
              </div>
              <div className="oti-line"></div>
              <div>
                <div className="oti-left">
                  <img
                    src={emmaImage}
                    alt=""
                  />
                  <p>Emma Richardson</p>
                </div>
                <div className="oti-right">
                  <p>+75.50</p>
                  <span>19 Aug 2024</span>
                </div>
              </div>
              <div className="oti-line"></div>
              <div>
                <div className="oti-left">
                  <img
                    src={emmaImage}
                    alt=""
                  />
                  <p>Emma Richardson</p>
                </div>
                <div className="oti-right">
                  <p>+75.50</p>
                  <span>19 Aug 2024</span>
                </div>
              </div>
              <div className="oti-line"></div>
              <div>
                <div className="oti-left">
                  <img
                    src={emmaImage}
                    alt=""
                  />
                  <p>Emma Richardson</p>
                </div>
                <div className="oti-right">
                  <p>+75.50</p>
                  <span>19 Aug 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE OF THE OVERVIEW CONTENT (BOTTOM ON MOBILE) */}
        <div className="additionals-section-right">
          {/* BUDGETS */}
          <div className="overview-section-budgets">
            <div className="osb-header">
              <h3>Budgets</h3>
              <p>See Details</p>
            </div>
            <div className="osb-content">
              <div className="osbc-left">
                <div className="outer-pie-graph">
                  <div className="middle-pie-graph">
                    <div className="inner-pie-graph">
                      <div className="ipg-data">
                        <h4>$338</h4>
                        <p>of $500 limit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="osbc-right">
                <div className="osbc-category-div">
                  <div className="osbc-category-left-border"></div>
                  <div className="osbc-category-container">
                    <div className="osbc-category">Entertainment</div>
                    <div className="osbc-category-amount">$50.00</div>
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
