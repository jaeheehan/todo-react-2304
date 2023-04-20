import TodoItem from "./TodoItem";
import styles from '../Todo.module.css'
import { useContext } from "react";
import TodoContext from "../contexts/todo";
import {Todo} from "../App";

interface Props {
    readonly todos?: Todo[];
    readonly onRemove: (id: number)=> void;
    readonly onToggle: (id: number) => void;
    readonly onEdit: (id: number, input: string) => void;
}

const TodoList = ({todos, onRemove, onToggle, onEdit}: Props ) => {

    //const { state, actions } = useContext(TodoContext)
    return (
        <div className={styles.list}>
            {todos && todos.map((todo)=>(
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    onEdit={onEdit}
                />
            ))}
        </div>
    )
}

export default TodoList