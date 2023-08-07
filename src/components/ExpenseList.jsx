/* eslint-disable react/jsx-key */
import ExpenseItem from "./ExpenseItem";
import { useContext} from "react";
import { ExpenseContext } from "../provider/expenseProvider";


const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);
  console.log("Expenses:", expenses);

  return (
    <div>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            date={expense.date}
            category={expense.category}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
   
  );
};
export default ExpenseList;
