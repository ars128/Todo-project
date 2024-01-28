export default function TodoItem2() {
  let todoName= 'Create Todo Project';
  let todoDate= '28/01/2024';

  return (
    <div className="container">
      <div className="row todo-row">

        {/* Defned value directly */}
        {/* <div className="col-6">Learn React</div>
        <div className="col-4">28/01/2024</div> */}

        {/* Assigning values using variables */}
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
