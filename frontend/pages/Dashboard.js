import { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const token = localStorage.getItem("token");
    const { data } = await axios.get("http://localhost:5000/api/expenses", {
      headers: { Authorization: token },
    });
    setExpenses(data);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ExpenseForm fetchExpenses={fetchExpenses} />
      <ExpenseList expenses={expenses} fetchExpenses={fetchExpenses} />
    </div>
  );
};

export default Dashboard;