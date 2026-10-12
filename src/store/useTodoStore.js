import { create } from "zustand";

const initialState = { // Начальное состояние
    todos: [],
    filter: 'all'
}

export const useTodoStore = create((set) => ({
    ...initialState,

    addTodo: (title) => {
        const trimmed = title.trim()
        if (!trimmed) return

        set((state) => ({
            todos: [...state.todos, { id: crypto.randomUUID(), title: trimmed, completed: false, createdAt: Date.now()}]
        }))
    } ,

    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        })),

    editTodo: (id, title) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, title } : todo
            )
        })),

    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        })),

    clearCompleted: () =>
        set((state) => ({
            todos: state.todos.filter((todo) => !todo.completed)
        })),

    setFilter: (filter) => set({ filter }),

    reset: () => set(initialState),
}))


export function filterTodos(todos, filter) {
    switch (filter) {
        case 'active':
            return todos.filter((t) => !t.completed)
        case 'completed':
            return todos.filter((t) => t.completed)
        default: return todos
    }
}