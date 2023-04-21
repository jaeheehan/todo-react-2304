import styles from '../Todo.module.css'
import { Todo } from '../App'
import React, {useState, useEffect, useCallback} from "react";
import {resetEditingId, setEditingId, TodoState} from "../modules/todos";
import {useDispatch, useSelector} from "react-redux";

interface Props {
    readonly todo: Todo;
    readonly onRemove:(id:number) => void;
    readonly onToggle:(id:number) => void;
    readonly onEdit: (id:number, input: string) => void;
}

const TodoItem = ({todo, onRemove, onToggle, onEdit}: Props) => {
    const {id, text, done} = todo;

    const { editingId } = useSelector((state: TodoState)=>({
        editingId: state.editingId,
    }));

    const showInput = (id === editingId);

    const [inputText, setInputText] = useState("");

    const editInput: React.RefObject<HTMLInputElement> = React.createRef();

    const dispatch = useDispatch();

    const onSetEditingId = useCallback((id: number) => dispatch(setEditingId(id)), [dispatch]);

    const onResetEditingId = useCallback(()=> dispatch(resetEditingId()), [dispatch]);

    const onDoubleClick = () => {
        console.log("onDoubleClick");

        onSetEditingId(id);
        setInputText(text)
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("onChange" + e.target.value);

        setInputText(e.target.value);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            console.log("handleKeyPress Enter inputText : " + inputText);

            onEdit(id, inputText)

            onResetEditingId();
        }
    }

    const handleBlur = () => {
        console.log("handleBlur inputText" + inputText);

        onResetEditingId();
    }



    useEffect(() => {
        console.log("useEffect todo = " + todo);

        if(todo) {
            console.log("todo.text=" + todo.text)
            setInputText(todo.text)
        }
    }, [todo])

    useEffect(()=> {
        if(editInput.current){
            editInput.current.focus();
        }
    }, [editInput])

    return (
        <div className={styles.item}>
            <input type="checkbox" checked={done} onChange={()=> onToggle(id)}/>
            {showInput && (
                <input
                    value={inputText}
                    onChange={onChange}
                    onKeyPress={handleKeyPress}
                    onBlur={handleBlur}
                    ref={editInput}
                />
            )}
            {!showInput && <span onDoubleClick={onDoubleClick}>{text}</span> }
            <button onClick={()=> onRemove(id)}>삭제</button>
        </div>

    )
};

export default TodoItem;