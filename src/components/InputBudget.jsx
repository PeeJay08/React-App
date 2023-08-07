import { useState } from "react";

const InputBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <div className="input-budget-container">
      <label>Budget: ₱</label>
      <input
        required="required"
        type="number"
        className="input-budget"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="button" className="input-budget-button" onClick={() => props.handleSaveClick(value)}>
        Save
      </button>
    </div>
  );
};
export default InputBudget;
