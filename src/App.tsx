import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Sidebar } from "./features/Sidebar/Sidebar";
import { Overview } from "./features/overview/Overview";
import { Transaction } from "./features/Transactions/Transactions";
import { Budgets } from "./features/Budgets/Budgets";
import { Pots } from "./features/Pots/Pots";
import { Recurring } from "./features/Recurring/Recurring";

function App() {
  return (
    <div className="page-container">
      <Sidebar />
      <main>
        <div className="main-container">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Overview />}
              />
              <Route
                path="/transactions"
                element={<Transaction />}
              />
              <Route
                path="/budgets"
                element={<Budgets />}
              />
              <Route
                path="/pots"
                element={<Pots />}
              />
              <Route
                path="/recurring"
                element={<Recurring />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
