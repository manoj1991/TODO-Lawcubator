import TodoItem from './TodoItem';

export default function TodoList({ todos, markComplete, startEditing, removeTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    markComplete={markComplete}
                    startEditing={startEditing}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
}
