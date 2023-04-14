import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { useState, useRef, useCallback } from 'react'
import { Todo } from '../App'
import { TodoProvider } from "../contexts/todo";

const Todos = () => {
    return (
        <TodoProvider>
            <TodoHeader/>
            <TodoInput />
            <TodoList/>
            <TodoFooter/>
        </TodoProvider>
    )
}

export default Todos;