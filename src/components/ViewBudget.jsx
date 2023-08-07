const ViewBudget = (props) => {
  return (
    <div className="input-budget-container">
      <span className="budget">Budget:</span> <span>₱{props.budget}</span>
      <button
        className="input-budget-button"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
};

export default ViewBudget;
