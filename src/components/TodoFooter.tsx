import styles from '../Todo.module.css'
import { useSelector } from "react-redux";
import { TodoState } from '../reducers/todos'

interface Props {
    readonly onClearAll: () => void;
}

const TodoFooter = ({onClearAll}: Props) => {

    const { todos, nextTodoId } = useSelector((state: TodoState) => ({
        todos: state.todos,
        nextTodoId: state.nextTodoId
    }));

    const data = {
        todos,
        nextTodoId
    };

    const onSave = () => {
        localStorage.setItem('todo-app-data', JSON.stringify(data))
    }

    return (
        <div className={styles.footer}>
            <button onClick={onClearAll}>모두삭제</button>
            <button onClick={onSave}>저장</button>
        </div>
    )
}

export default TodoFooter