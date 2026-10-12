import { useTodoStore, filterTodos } from "../store/useTodoStore"

const FILTERS = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' }
]

export default function TodoFilters() {
    const { todos, filter, setFilter } = useTodoStore()

    return (
        <div style={{ display: 'flex', gap: 8 }}>
            {FILTERS.map((f) => (
                <button
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    aria-pressed={filter === f.value}
                    style={{ fontWeight: filter === f.value ? 700 : 400 }}
                >
                    { }
                    {f.label} ({filterTodos(todos, f.value).length})
                </button>
            ))}
        </div>
    )
}