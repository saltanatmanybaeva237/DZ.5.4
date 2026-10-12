import { useTodoStore } from "../store/useTodoStore"

export default function TodoStats() {

    const { todos, clearCompleted } = useTodoStore()

    const total = todos.length
    const completed = todos.filter((t) => t.completed).length
    const active = total - completed

    return (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 12 }}>
            <span>Всего: {total}</span>
            <span>Активных: {active}</span>
            <span>Выполнено: {completed}</span>

            <button onClick={clearCompleted} disabled={completed === 0}>
                Очистить выполненные
            </button>
        </div>
    )
}