/* eslint-disable no-case-declarations */

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const updatedExpenses = [...state.expenses, action.payload];
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return {
        ...state,
        expenses: updatedExpenses,
      };
    case "DELETE_EXPENSE":
      const filteredExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      localStorage.setItem("expenses", JSON.stringify(filteredExpenses));
      return {
        ...state,
        expenses: filteredExpenses,
      };
      case "SET_BUDGET":
        localStorage.setItem("budget", action.payload);
        return {
          ...state,
          budget: action.payload,
        };
    default:
      return state;
  }
};

export { expenseReducer };