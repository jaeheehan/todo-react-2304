import TodoItem from "./TodoItem";
import styles from '../Todo.module.css'
import { useState } from "react";
import { Todo } from '../App'
import { TodoConsumer } from "../contexts/todo";

const TodoList = () => {
    return (
        <TodoConsumer>
            {({state, actions}) => (
                <div className={styles.list}>
                    {state.todos.map((todo)=>(
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            onRemove={actions.onRemove}
                            onToggle={actions.onToggle}/>
                    ))}
                </div>
                )}
        </TodoConsumer>
    )
}

export default TodoList