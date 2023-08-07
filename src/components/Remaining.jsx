import { useContext } from "react"
import { ExpenseContext } from "../provider/expenseProvider"

const Remaining = () => {

    const { expenses, budget } = useContext(ExpenseContext)

    const totalExpense = expenses.reduce((total, expense) => {
        return (total = total + expense.cost)
    }, 0)
    return(
        <div className="remaining">
            <span className="budget">Remaining: ₱</span> <span>{budget - totalExpense}</span>
        </div>
    )
}
export default Remaining