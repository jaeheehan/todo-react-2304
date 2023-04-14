import styles from '../Todo.module.css'
import { useContext } from "react";
import TodoContext from "../contexts/todo";

const TodoFooter = () => {

    const { actions } = useContext(TodoContext)
    return (
        <div className={styles.footer}>
            <button onClick={()=> actions.onClearAll()}>모두삭제</button>
        </div>
    )
}

export default TodoFooter