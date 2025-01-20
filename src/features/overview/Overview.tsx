import { useEffect, useState } from "react";
import { useGetOverviewQuery } from "../../services/overviewApi";
import "./overview.css";

import { JarIcon } from "./JarIcon";
import emmaImage from "../../assets/images/avatars/emma-richardson.jpg";

export const Overview = () => {
  const [balance, setBalance] = useState({
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

      setBalance((prev) => ({
        ...prev,
        current: formattedCurrent,
        expenses: formattedExpenses,
        income: formattedCurrency,
      }));
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>Error fetching data</div>;
  }

  function formatCurrency(value: number) {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
    return formattedNumber;
  }

  return (
    <>
      <h1 className="overview-title">Overview</h1>
      <div className="overview-info-container">
        <div>
          <h4>Current Balance</h4>
          <p>${balance.current}</p>
        </div>
        <div>
          <h4>Income</h4>
          <p>${balance.income}</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p>${balance.expenses}</p>
        </div>
      </div>

      <section className="additionals-section">
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

        <div className="additionals-section-right"></div>
      </section>
    </>
  );
};
