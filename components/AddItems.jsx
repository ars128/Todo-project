function AddItems() {
  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here" name="todo-field" />
        </div>
        <div className="col-4">
          <input type="date" name="todo-date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todo-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItems;
