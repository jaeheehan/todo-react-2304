import styles from '../Todo.module.css'
import TodoContext from "../contexts/todo";
import { useContext } from "react";

interface Props {
    readonly input:string;
    readonly onInsert: (input: string) => void;
    readonly onChangeInput: (input: string) => void;
}

const TodoInput = ({input, onInsert, onChangeInput}: Props ) => {

    //const { state, actions } = useContext(TodoContext);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onInsert(input)
        onChangeInput("")
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> onChangeInput(e.target.value)

    return (
        <div className={styles.input}>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="할 일을 입력하세요"
                    value={input}
                    onChange={onChange}
                />
                <button type="submit">추가</button>
            </form>
        </div>
    )
}
export default TodoInput;