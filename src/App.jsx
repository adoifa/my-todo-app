import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    return (
        <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center p-4">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-[#1A1A1A] py-12 rounded-xl">
                <Header />
                <TodoForm
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    setEditTodo={setEditTodo}
                />
            </div>
        </div>
    );
};

export default App;
