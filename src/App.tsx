import "./App.css";
import { Sidebar } from "./features/sidebar/Sidebar";
import { Overview } from "./features/overview/Overview";

function App() {
  return (
    <div className="page-container">
      <Sidebar />
      <main>
        <div className="main-container">
          <Overview />
        </div>
      </main>
    </div>
  );
}

export default App;
