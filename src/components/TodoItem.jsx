import { useState } from "react"
import { useTodoStore } from "../store/useTodoStore"


export default function TodoItem({ todo }) {

    const { toggleTodo, editTodo, deleteTodo } = useTodoStore()

    const [isEditing, setIsEditing] = useState(false)
    const [draft, setDraft] = useState(todo.title)

    function save() {
        const trimmed = draft.trim()
        if(trimmed) editTodo(todo.id, trimmed)
        else setDraft(todo.title)
        setIsEditing(false)
    }

    return (
        <li style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '6px 0'}}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} /> 

            {isEditing ? (
                <input 
                    autoFocus
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onBlur={save}
                    onKeyDown={(e) => e.key === 'Enter' && save()}
                    style={{ flex: 1 }}
                />
            ) : (
                <span
                    onDoubleClick={() => setIsEditing(true)}
                    style={{ flex: 1, textDecoration: todo.completed ? 'line-through': 'none' }}
                >
                    {todo.title}
                </span>
            )}
                
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
        </li>
    )
}