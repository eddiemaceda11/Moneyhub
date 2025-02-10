import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Sidebar } from "./features/sidebar/Sidebar";
import { Overview } from "./features/overview/Overview";
import { Transaction } from "./features/transactions/Transactions";

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
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
