import { Bar } from "react-chartjs-2";

const ExpenseChart = ({ expenses }) => {
  const categories = [...new Set(expenses.map(e => e.category))];
  const data = {
    labels: categories,
    datasets: [{
      label: "Expenses",
      data: categories.map(cat => expenses.filter(e => e.category === cat).reduce((sum, e) => sum + e.amount, 0)),
      backgroundColor: "rgba(75,192,192,0.6)",
    }]
  };

  return <Bar data={data} />;
};

export default ExpenseChart;