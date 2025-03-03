import { useState } from "react";
import axios from "axios";

const ExpenseForm = ({ fetchExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/api/expenses", { title, amount, category }, {
      headers: { Authorization: token },
    });
    fetchExpenses();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} required />
      <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;