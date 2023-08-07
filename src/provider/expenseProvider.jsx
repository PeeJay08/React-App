import { createContext, useReducer} from "react";
import { expenseReducer } from "../reducer/expenseReducer";

const initialState = {
  budget: JSON.parse(localStorage.getItem("budget")) || 0,
  expenses: JSON.parse(localStorage.getItem("expenses")) || [],
};

const ExpenseContext = createContext();

const ExpenseProvider = (props) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ budget: state.budget, expenses: state.expenses, dispatch }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export { ExpenseContext, ExpenseProvider };