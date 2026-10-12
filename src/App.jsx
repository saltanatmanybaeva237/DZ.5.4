import TodoFilters from "./components/TodoFilters"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoStats from "./components/TodoStats"

function App() {

  return (
    <div>
      <h1>TODO ZUSTAND</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
      <TodoStats />
    </div>
  )
}

export default App