import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [editTodo, setInput]);

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const updateTodo = (title, id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, title } : todo
        ));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id);
            setEditTodo(null); 
            setInput("");  
        }
    };

    return (
        <form onSubmit={onFormSubmit} className="flex flex-col items-center space-y-4 w-full ">
            <div className='p-4 flex w-full justify-center items-center'>
                <input 
                    type='text' 
                    value={input} 
                    onChange={onInputChange} 
                    placeholder='Add a new task...' 
                    required 
                    aria-label='Todo input' 
                    className="w-full p-2 px-4 bg-[#262626] text-[#808080] rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                />
                <button className="bg-[#1E6F9F] text-white py-2 px-8 rounded-lg hover:bg-[#1c6894] transition duration-200 mt-2 sm:mt-0 sm:ml-2" type='submit'>
                    {editTodo ? 'Update' : 'Add'}
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
