import { useContext } from "react"
import { ExpenseContext } from "../provider/expenseProvider"

const TotalExpense = () => {

    const { expenses } = useContext(ExpenseContext)
    const totalExpenses = expenses.reduce((total, expense) => {
        return (total += expense.cost)
    }, 0)
    return(
        <div className="total-expense">
            <span className="budget">Spent so far: ₱</span><span>{totalExpenses}</span>
        </div>
    )
}
export default TotalExpense