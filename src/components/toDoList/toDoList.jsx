import Todo from "../toDo/toDo.jsx";
import { useSelector } from "react-redux";

function TodoList({editTodo, deleteTodo, todoFinished}) {
    
    const list = useSelector((state) => state.todo);

    return (
        <div>
        {list.length > 0 &&
            list.map((todo) => (
            <Todo
                key={todo.id}
                id={todo.id}
                isFinished={todo.finished}
                todoData={todo.todoData}
                changeFinished={(isFinished) => todoFinished(todo, isFinished)}
                onDelete={() => deleteTodo(todo)}
                onEdit={(todoText) => editTodo(todo, todoText)}
            />
            ))}
        </div>
    );
}

export default TodoList;
