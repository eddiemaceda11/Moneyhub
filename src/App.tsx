import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Sidebar } from './features/Sidebar/Sidebar';
import { MobileSidebar } from './features/Sidebar/MobileSidebar';
import { Overview } from './features/Overview/Overview';
import { Transaction } from './features/Transactions/Transactions';
import { Budgets } from './features/Budgets/Budgets';
import { Pots } from './features/Pots/Pots';
import { Recurring } from './features/Recurring/Recurring';
import { useState, useEffect } from 'react';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    console.log(windowSize.width);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    setWindowSize({ width: newWidth, height: newHeight });
  };

  console.log(windowSize.width);

  return (
    <div className='page-container'>
      <BrowserRouter>
        {windowSize.width > 820 && <Sidebar />}
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
        {/* TODO - create a mobile sidebar */}
        {windowSize.width <= 820 && <MobileSidebar />}
      </BrowserRouter>
    </div>
  );
}

export default App;
