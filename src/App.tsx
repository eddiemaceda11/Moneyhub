import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Sidebar } from "./features/sidebar/Sidebar";
import { Overview } from "./features/Overview/Overview";
import { Transaction } from "./features/Transactions/Transactions";

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
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
