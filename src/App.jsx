import Table from "./components/table"

function App() {
  return (
    <div className="bg-gray-900 w-full h-screen flex justify-center items-center flex-col gap-y-4">
      <header className="bg-gray-200 rounded-md border max-w-screen-md h-8 w-full flex justify-center items-center">
          
      </header>
      <div className="bg-gray-200 rounded-md border max-w-screen-md h-20 w-full flex justify-center items-center">
        <h1 className="text-4xl font-semibold">Tabla de Usuarios</h1>
      </div>
      <div className="bg-gray-200 rounded-md border border-gray-100 w-full p-2 max-w-screen-md">
        <Table />
      </div>
        <a className="w-full max-w-screen-md bg-blue-600 rounded-md px-4 py-4 text-white font-semibold text-2xl text-center cursor-pointer hover:bg-blue-500">
          Add User
        </a>
    </div>
  )
}

export default App
