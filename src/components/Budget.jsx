import { useContext, useState } from "react"
import { ExpenseContext } from "../provider/expenseProvider"
import ViewBudget from "./ViewBudget"
import InputBudget from "./InputBudget"

const Budget = () => {
    const { budget, dispatch } = useContext(ExpenseContext) 
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};
    return (
        <div>
            {isEditing ? (
				<InputBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
        </div>
    )
}
export default Budget