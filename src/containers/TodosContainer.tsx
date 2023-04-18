import React, {useCallback} from "react"
import { connect } from 'react-redux'
import {
    changeTodoInput,
    addTodo,
    toggleTodoStatus,
    removeTodo,
    clearAllTodos
} from "../modules/todos";

import Todos from '../components/Todos'
import {TodoState} from "../modules/todos";
import {Todo} from "../App";
import { useSelector, useDispatch } from "react-redux";

const TodosContainer = () => {

    const { input, todos } = useSelector((state: TodoState) => ({
        input: state.input,
        todos: state.todos,
    }));

    const dispatch = useDispatch();

    const onChangeInput = useCallback((input: string)=> dispatch(changeTodoInput(input)), [dispatch])
    const onInsert = useCallback((input: string)=> dispatch(addTodo(input)), [dispatch])
    const onToggle = useCallback((id: number) => dispatch(toggleTodoStatus(id)), [dispatch])
    const onRemove = useCallback((id: number)=> dispatch(removeTodo(id)), [dispatch])
    const onClearAll = useCallback(()=>dispatch(clearAllTodos()), [dispatch])

    return (
        <Todos
            input={input}
            todos={todos}
            onRemove={onRemove}
            onToggle={onToggle}
            onClearAll={onClearAll}
            onInsert={onInsert}
            onChangeInput={onChangeInput}
        />
    );
};

export default TodosContainer;


