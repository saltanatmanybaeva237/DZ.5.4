import { useTodoStore, filterTodos } from "../store/useTodoStore"
import TodoItem from "./TodoItem"


export default function TodoList() {

    const { todos, filter } = useTodoStore()

    const visibleTodos = filterTodos(todos, filter)

    if (todos.length === 0) return <p>Задач нет</p>
    if (visibleTodos.length === 0) return <p>В этом фильтре пока пусто</p>

    return (
        <ul>
            {visibleTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}