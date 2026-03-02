import { useState } from "react";

type Props = { onAdd: (title: string) => void };

const TodoInput = ({ onAdd }: Props) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = () => {
        if (inputValue.trim() === "") return; // 空の入力は無視
        onAdd(inputValue); // 親コンポーネントに入力値を渡す
        setInputValue(""); // 入力フィールドをクリア
    };

    return (
        <div className="mb-6 flex gap-2">
            <input
                type="text"
                placeholder="新しいタスクを入力..."
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
            className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            onClick={handleSubmit}
            >
                追加
            </button>
        </div>
    );
}
export default TodoInput;