
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons';
export default function TodoItem({ todo, index, markComplete, startEditing, removeTodo }) {
    return (
        <li className="todo-item">
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <div className="todo-buttons">
                <button onClick={() => markComplete(index)}>
                    <FontAwesomeIcon icon={todo.completed ? faUndo : faCheck} />
                </button>
                <button onClick={() => startEditing(index)}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => removeTodo(index)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>

            </div>
            
        </li>
    );
}
