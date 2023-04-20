import React, {useCallback} from "react"
import { connect } from 'react-redux'
import {
    changeTodoInput,
    addTodo,
    toggleTodoStatus,
    removeTodo,
    clearAllTodos,
    changeFilter, editTodo,
} from "../modules/todos";

import Todos from '../components/Todos'
import {TodoState} from "../modules/todos";

import { useSelector, useDispatch } from "react-redux";
import { getFilteredTodos } from "../modules/selector";

const TodosContainer = () => {

    const { input, filter, filteredTodos } = useSelector((state: TodoState) => ({
        input: state.input,
        filter: state.filter,
        filteredTodos: getFilteredTodos(state),
    }));

    const dispatch = useDispatch();

    const onChangeInput = useCallback((input: string)=> dispatch(changeTodoInput(input)), [dispatch])
    const onInsert = useCallback((input: string)=> dispatch(addTodo(input)), [dispatch])
    const onToggle = useCallback((id: number) => dispatch(toggleTodoStatus(id)), [dispatch])
    const onRemove = useCallback((id: number)=> dispatch(removeTodo(id)), [dispatch])
    const onClearAll = useCallback(()=>dispatch(clearAllTodos()), [dispatch])
    const onChangeFilter = useCallback((filter: string) => dispatch(changeFilter(filter)), [dispatch])
    const onEdit = useCallback((id: number, input: string) => dispatch(editTodo(id, input)), [dispatch])

    return (
        <Todos
            input={input}
            todos={filteredTodos}
            onRemove={onRemove}
            onToggle={onToggle}
            onClearAll={onClearAll}
            onInsert={onInsert}
            filter={filter}
            onChangeFilter={onChangeFilter}
            onChangeInput={onChangeInput}
            onEdit = {onEdit}
        />
    );
};

export default TodosContainer;


