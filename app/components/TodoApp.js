"use client";

import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [currentTodo, setCurrentTodo] = useState('');

    const addTodo = (text) => {
        if (text.trim() !== '') {
            setTodos([...todos, { text, completed: false }]);
        }
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const markComplete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setCurrentTodo(todos[index].text);
    };

    const editTodo = (index, newText) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = newText;
        setTodos(updatedTodos);
        setEditIndex(-1);
        setCurrentTodo('');
    };

    return (
        <div className='todo-container'>
            <div className="header">
                <h1>Todo List</h1>
            </div>
            <TodoForm addTodo={addTodo} editTodo={editTodo} editIndex={editIndex} currentTodo={currentTodo} />
            <TodoList todos={todos} markComplete={markComplete} startEditing={startEditing} removeTodo={removeTodo} />
        </div>
    );
}
