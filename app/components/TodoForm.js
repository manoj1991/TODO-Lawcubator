"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave  } from '@fortawesome/free-solid-svg-icons';


export default function TodoForm({ addTodo, editTodo, editIndex, currentTodo }) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (editIndex !== -1) {
            setInputValue(currentTodo);
        } else {
            setInputValue('');
        }
    }, [editIndex, currentTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== -1) {
            editTodo(editIndex, inputValue);
        } else {
            addTodo(inputValue);
        }
        setInputValue('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button className="button" type="submit">  {editIndex !== -1 ? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faPlus} />}</button>
        </form>
    );
}
