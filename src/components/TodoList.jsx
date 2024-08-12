import React from 'react';
import waitPicture from '../../public/picture/wait.png';
import removeIcon from '../../public/picture/remove.png';
import complateIcon from '../../public/picture/complete.png';
import editIcon from '../../public/picture/edit.png';
import closeIcon from '../../public/picture/close.png';

const TodoList = ({ todos, setTodos, setEditTodo }) => {

    const handleComplete = (id) => {
        setTodos(todos.map((item) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }));
    };

    const handleEdit = (id) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    const handleRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="p-4 flex w-full justify-center items-center">
            {todos.length > 0 ? (
                <ul className="space-y-2 w-full s-mobile lg-w-80">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex justify-between text-[#F2F2F2] items-center p-2 border border-[#333333] rounded-lg bg-[#262626] shadow-sm">
                            <span className={`flex-1 ${todo.completed ? 'line-through text-[#F2F2F2]' : ''}`}>
                                {todo.title}
                            </span>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => handleComplete(todo.id)}
                                    className=""
                                >
                                    {todo.completed ? <img src={closeIcon} alt="icon" className='h-4 w-4' /> : <img src={complateIcon} alt="icon" className='h-4 w-4 cursor-pointer' /> }
                                </button>
                                <img src={editIcon} alt='icon'
                                    onClick={() => handleEdit(todo.id)}
                                    className="h-4 w-4 cursor-pointer"
                               / >
                                <img src={removeIcon} alt='icon'
                                    onClick={() => handleRemove(todo.id)}
                                    className="h-4 w-4 cursor-pointer"
                               / >
                                
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className='flex flex-col items-center text-center'>
                    <img src={waitPicture} alt='Picture' className='mb-4 max-w-xs' />
                    <p className='text-gray-500 text-center'>
                        You have not registered any tasks yet
                    </p>   
                </div>
            )}
        </div>
    );
};

export default TodoList;
