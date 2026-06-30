import AddTodo from './components/addTodo/addTodo.jsx'
import TodoList from './components/toDoList/toDoList.jsx'
import TodoContext from './todoContext/TodoContext.js'
import todoReducer from './reducers/todoReducer.js'
import { useReducer } from 'react'
import TodoDispatchContext from './todoContext/TodoDispatchContext.js'

function App() {

  const [list, dispatch] = useReducer(todoReducer, [])

  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext value={{dispatch}}>
        <AddTodo />
        <TodoList/>
      </TodoDispatchContext>
    </TodoContext.Provider>
  )
}

export default App
