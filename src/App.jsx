import React from "react";
import "./App.css";
import { RecoilRoot, useRecoilState,useRecoilValue } from "recoil";
import { todoAtom, todosAtom,filterAtom, selectedCategoryAtom,selectedFilterSelector } from "./store/atom";


const TodoList = React.memo(({ todos }) => (
  <div>
    {todos.map((t) => (
      <div key={t.id}>{t.text}</div>
    ))}
  </div>
));

function MyTodos() {
  const [todo, setTodo] = useRecoilState(todoAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);
  const [category, setCategory] = useRecoilState(selectedCategoryAtom);
  const filteredTodos =useRecoilValue(selectedFilterSelector);
  const handleClick = () => {
    if (todo.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text: todo,filter:filter}]);
      setTodo("");
    }
    setCategory(category);
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <br />
      <div>
        <h3>Filter Todos</h3>
        <select
          value={category}
          onChange={(e) =>setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Shopping">Shopping</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Leisure">Leisure</option>
        </select>
      </div>
      <button onClick={handleClick}>Add</button>
      <TodoList todos={filteredTodos} />
    </div>
  );
}

const App = () => {
  return <RecoilRoot><MyTodos/></RecoilRoot>
}

export default App;
