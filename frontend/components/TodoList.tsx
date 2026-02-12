const MOCK_TODOS = [
  { id: 1, title: "牛乳を買う", completed: false },
  { id: 2, title: "このアプリを作る", completed: true },
]

const TodoList = () => {
    return (
        <ul className="space-y-3">
            {MOCK_TODOS.map((todo) => (
                <li key={todo.id} className="flex items-center justify-center-safe border-b border-gray-500 pb-3 last:border-none  gap-3">
                    <div className="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            readOnly 
                        />
                        {/* 完了なら取り消し線をつける条件分岐 */}
                        <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.title}</span>
                    </div>
                    <button className="text-red-500 hover:text-red-700">削除</button>
                </li>
            ))}
        </ul>
    );}
export default TodoList;