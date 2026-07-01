import { useDispatch } from 'react-redux'
import AddTodo from './components/addTodo/addTodo.jsx'
import TodoList from './components/toDoList/toDoList.jsx'
import { bindActionCreators } from 'redux'
import {addTodo, deleteTodo, editTodo, todoFinished} from './actions/todoActions.js'

function App() {

  const dispatch = useDispatch();  //automatically it refers to store.js
  const actions = bindActionCreators({addTodo, deleteTodo, editTodo, todoFinished}, dispatch);

  return (
    <>
      <AddTodo addTodo={actions.addTodo} />
      <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} />
    </>
  )
}

export default App
