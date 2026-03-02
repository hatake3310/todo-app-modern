import { Todo } from "@/types/todo"
type Props = {
    todos: Todo[]
    onToggle: (id: number, completed: boolean) => void
    onDelete: (id: number) => void
}
const TodoList = ({todos, onToggle, onDelete}: Props) => {

    if (todos.length === 0) {
        return <p className="text-center text-gray-500 py-4">タスクがありません。</p>
    }

    return (
        <ul className="space-y-3">
            {todos.map((todo) => (
                <li key={todo.id} className="flex items-center justify-center-safe border-b border-gray-500 pb-3 last:border-none  gap-3">
                    <div className="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            readOnly 
                            onChange={() => onToggle(todo.id, todo.completed)}
                        />
                        {/* 完了なら取り消し線をつける条件分岐 */}
                        <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.title}</span>
                    </div>
                    <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onDelete(todo.id)}
                    >
                        削除
                    </button>
                </li>
            ))}
        </ul>
    );}
export default TodoList;