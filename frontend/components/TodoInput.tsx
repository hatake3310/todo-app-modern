const TodoInput = () => {
    return (
        <div className="mb-6 flex gap-2">
            <input
                type="text"
                placeholder="新しいタスクを入力..."
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500"
            />
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700">
                追加
            </button>
        </div>
    );
}
export default TodoInput;