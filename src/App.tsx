import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Sidebar } from './features/Sidebar/Sidebar';
import { Overview } from './features/Overview/Overview';
import { Transaction } from './features/Transactions/Transactions';
import { Budgets } from './features/Budgets/Budgets';
import { Pots } from './features/Pots/Pots';
import { Recurring } from './features/Recurring/Recurring';

function App() {
  return (
    <div className='page-container'>
      <BrowserRouter>
        <Sidebar />
        <main>
          <div className='main-container'>
            <Routes>
              <Route
                path='/'
                element={<Overview />}
              />
              <Route
                path='/transactions'
                element={<Transaction />}
              />
              <Route
                path='/budgets'
                element={<Budgets />}
              />
              <Route
                path='/pots'
                element={<Pots />}
              />
              <Route
                path='/recurring'
                element={<Recurring />}
              />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
