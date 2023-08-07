import { useContext } from "react";
import { ExpenseContext } from "../provider/expenseProvider";
import { Icon } from "@iconify/react";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(ExpenseContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-item">
<div className="data-container">
    <span className="data-label">Name:</span> {props.name}
  </div>
  <div className="data-container">
    <span className="data-label">Date:</span> {props.date}
  </div>
  <div className="data-container">
    <span className="data-label">Category:</span> {props.category}
  </div>
  <div className="data-container">
    <span className="data-label">Cost:</span> ₱{props.cost}
  </div>
  <Icon
    className="delete"
    icon="icon-park:delete"
    onClick={handleDeleteExpense}
  />
    </li>
  );
};
export default ExpenseItem;
