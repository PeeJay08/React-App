import AddExpense from "../components/AddExpense";
import Budget from "../components/Budget";
import ExpenseList from "../components/ExpenseList";
import Remaining from "../components/Remaining";
import TotalExpense from "../components/TotalExpense";
import { ExpenseProvider } from "../provider/expenseProvider";
import Logo from "../asset/BP icon.png";
import { useNavigate } from "react-router-dom";

const BudgetPlanner = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const handleLogout = () => {

    navigate("/");
  };
  return (
    <ExpenseProvider>
      <div>
        <div className="top">
          <img className="logo" src={Logo} alt="BP Logo" />
        </div>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
        <div className="budget-container">
          <h1>Welcome {username}</h1>
          <h2>Budget Planner</h2>
          <div className="head-container">
            <Budget />
            <Remaining />
            <TotalExpense />
          </div>
          <h3>Expenses</h3>
          <div className="expenseList-container">
            <ExpenseList />
          </div>
          <h3>Add New Expense</h3>
          <div className="form-container">
            <AddExpense />
          </div>
        </div>
        <footer>© Patrick Joshua San Jose</footer>
      </div>
    </ExpenseProvider>
  );
};
export default BudgetPlanner;
