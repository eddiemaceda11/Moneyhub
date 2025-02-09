import { useGetOverviewQuery } from "../../services/overviewApi";
import "./overview.css";

import { useBalanceData } from "../../hooks/useBalanceData";
import { usePotsData } from "../../hooks/usePotsData";
import { useTransactionsData } from "../../hooks/useTransactionsData";

import { JarIcon } from "./JarIcon";
import emmaImage from "/images/avatars/emma-richardson.jpg";
import { useBudgetData } from "../../hooks/useBudgetData";

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

  // TODO -> move into a utils folder
  function configureImgPath(image: string): string {
    return image.slice(8);
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
              <div className="oti-line"></div>
              <div>
                <div className="oti-left">
                  <img
                    src={configureImgPath(transactionsData[1].avatar)}
                    alt=""
                  />
                  <p>{transactionsData[1].name}s</p>
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
