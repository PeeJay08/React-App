import { useState, useContext } from "react";
import { ExpenseContext } from "../provider/expenseProvider";

import { v4 as uuidv4 } from "uuid"

const AddExpense = () => {
  const { dispatch } = useContext(ExpenseContext)
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")
  const [cost, setCost] = useState("")

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      date: date,
      category: category,
      cost: parseInt(cost)
    }
  
    dispatch({
      type:"ADD_EXPENSE",
      payload: expense,
    })
    setName('')
    setDate('')
    setCategory('')
    setCost('')
  }

  return (
    <form onSubmit={onSubmit} >
      <label htmlFor="name">Name: </label>
      <input type="text" required id="name" value={name} onChange={(event) => setName(event.target.value)}/>
      <label htmlFor="date">Date: </label>
      <input type="date" required id="date" value={date} onChange={(event) => setDate(event.target.value)}/>
      <label htmlFor="name">Category: </label>
      <select name="category" id="category" required value={category} onChange={(event) => setCategory(event.target.value)}>
        <option value="" disabled> Select Category</option>
        <option value="Utility">Utility</option>
        <option value="Food">Food</option>
        <option value="Personal">Personal</option>
      </select>
      <label htmlFor="cost">Cost: </label>
      <input type="number" required id="number" value={cost} onChange={(event) => setCost(event.target.value)}/>
      <br />
      <input className="add" type="submit" value="Add" />
    </form>
  );
};
export default AddExpense;
