import { ADD_TODO, DEL_TODO, FIN_TODO, EDT_TODO } from "../constants/action";

const todoFinished = (todo, isFinshed) => ({type: FIN_TODO, payload: {todo, isFinshed}});
const addTodo = (inputText) => ({type: ADD_TODO, payload: {todoText: inputText}});
const deleteTodo = (todo) => ({type: DEL_TODO, payload: {todo}});
const editTodo = (todo, todoText) => ({type: EDT_TODO, payload: {todo, todoText}});


export {
    todoFinished,
    addTodo,
    deleteTodo,
    editTodo
}