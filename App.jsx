import AppName from './components/AppName';
import AddItems from './components/AddItems';
import TodoItem1 from './components/TodoItem1';
import TodoItem2 from './components/TodoItem2';
import './App.css';

function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddItems />
        <div className="todo-items">
          <TodoItem1 todoName="But Milk" todoDate="11/02/2024" />
          <TodoItem2 />
        </div>
      </center>
    </div>
  );
}

export default App;
