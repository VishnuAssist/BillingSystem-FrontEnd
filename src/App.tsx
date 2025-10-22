import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Dashboard from "./pages/Dashboard";
import MilkEntry from "./pages/MilkEntry";
import AddProvider from "./pages/AddProvider";
import Sale from "./pages/Sale";
import Stock from "./pages/Stock";
import Payment from "./pages/Payment";
import Summery from "./pages/Summery";
import Info from "./pages/Info";
import Expense from "./pages/Expense";
import Login from "./pages/Authentication";

function App() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <Router>
      <Routes>
        {/* 🟢 Public route: Login (no sidebar/layout) */}
        <Route path="/" element={<Login />} />

        {/* 🟢 Protected routes: wrapped with Layout */}
        <Route
          path="/*"
          element={
            <Layout onSearch={handleSearch}>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="milk-entry" element={<MilkEntry />} />
                <Route path="add-provider" element={<AddProvider />} />
                <Route path="sale" element={<Sale />} />
                <Route path="stock" element={<Stock />} />
                <Route path="payment" element={<Payment />} />
                <Route path="summary" element={<Summery />} />
                <Route path="info" element={<Info />} />
                <Route path="expense" element={<Expense />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
