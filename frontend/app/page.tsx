import Header from "@/components/Header"
import TodoInput from "@/components/TodoInput"
// import TodoList from "@/components/TodoList"
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-xl px-4">
        <Header />
        {/* ここに部品を置いていきます */}
        {/* <p className="text-center font-bold">ここにTodoアプリを作りますyo!!fuanda</p> */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <TodoInput />
          {/* <TodoList /> ◀ ここに配置！ */}
        </div>
      </div>
    </main>
  )
}