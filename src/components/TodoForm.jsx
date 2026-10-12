import { useState } from "react"
import { useTodoStore } from "../store/useTodoStore"


export default function TodoForm() {
    
    const [title, setTitle] = useState('')
    const { addTodo } = useTodoStore()

    function handleSubmit(e) {
        e.preventDefault()
        addTodo(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Что нужно сделать?"
                style={{ flex: 1, padding: 0 }}
            />
            <button>Добавить</button>
        </form>
    )
}