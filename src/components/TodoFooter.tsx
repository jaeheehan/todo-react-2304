import styles from '../Todo.module.css'
import { useContext } from "react";
import TodoContext from "../contexts/todo";

interface Props {
    readonly onClearAll: () => void;
}

const TodoFooter = ({onClearAll}: Props) => {

    //const { actions } = useContext(TodoContext)
    return (
        <div className={styles.footer}>
            <button onClick={onClearAll}>모두삭제</button>
        </div>
    )
}

export default TodoFooter