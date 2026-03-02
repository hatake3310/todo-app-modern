"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import TodoInput from "@/components/TodoInput"
import TodoList from "@/components/TodoList"
import { Todo } from "@/types/todo"

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3001/todos")
        if (!response.ok) throw new Error("データの取得に失敗しました")
        const data = await response.json()
        setTodos(data)
      } catch (error) {
        console.error(error)
        alert("データの読み込みに失敗しました。バックエンドは起動していますか？")
      }
    }
    fetchTodos()
  }, []) // [] は「最初の1回だけ実行する」という意味

  const handleAddTodo = async (title: string) => {
    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      })
      if (!response.ok) throw new Error("追加に失敗しました")
        
      const newTodo = await response.json()
      setTodos([...todos, newTodo]) // 追加したTodoを状態に反映
    } catch (error) {
      console.error(error)
      alert("追加できませんでした")
    }
  }

  const handleToggleTodo = async (id: number, completed: boolean) => {
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !completed }),
      })
      if (!response.ok) throw new Error("更新に失敗しました")
  
      // 画面側のデータを更新 (idが一致するものだけcompletedを反転)
      setTodos(todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !completed } : todo
      ))

    } catch (error) {
      console.error(error)
      alert("更新できませんでした")
    }
  }

  const handleDeleteTodo = async (id: number) => {
    if (!confirm("本当に削除しますか？")) return
    try {
      const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error("削除に失敗しました")
      // 画面側のデータを更新 (idが一致するものを除外)
      setTodos(todos.filter((todo) => todo.id !== id))
    } catch (error) {
      console.error(error)
      alert("削除できませんでした")
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-xl px-4">
        <Header />
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <TodoInput onAdd ={handleAddTodo}/>
          {/* ▼ 親(page)から子(List)へデータを渡す (Props) */}
          <TodoList
           todos={todos} 
           onToggle={handleToggleTodo}
           onDelete={handleDeleteTodo}
          /> 
        </div>
      </div>
    </main>
  )
}