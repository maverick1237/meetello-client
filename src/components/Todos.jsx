import { faCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from '@mui/material';
import React, { useState } from 'react';
const Todos = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Create a Video Room For 1st time', completed: false },
        { id: 2, task: 'Create a Messaging for the first time', completed: false },
        { id: 3, task: 'Create a Voice Room for the first time', completed: false }
    ]);

    const handleTodoClick = (id) => {
        //TODO: fetch the number of  respective room created by the user and check if the size is >0 if so then turn the completed to true
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: true } : todo
            )
        );
    };
    return (
        <div className='ml-5 mr-[10vw]'>
            <h1 className='text-xl  leading-tight text-justify'>Complete these steps,<br /> to get started!</h1>
            <Divider 
                width='50%'
            className='mt-2' />
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        className={`${todo.completed ? 'text-blue-500 opacity-80' : 'text-green-800'}  cursor-pointer mt-2 flex w-[100%]`}
                        onClick={() => handleTodoClick(todo.id)}
                    >
                     <FontAwesomeIcon icon={todo.completed ? faCheck : faClock } className='mr-2' />
                        <h1>{todo.task}</h1>   
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;