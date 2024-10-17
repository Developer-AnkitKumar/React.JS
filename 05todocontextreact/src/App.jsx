import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './contexts';
import { TodoForm } from './components';
import { TodoItem } from "./components";

function App() {
  const [Todos, setTodos] = useState([]);

  // Add new todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Update an existing todo
  const updateTodo = (id, todo) => {
    setTodos((prev) => 
      prev.map((prevTodo) => (prevTodo.id === id ? { id, ...todo } : prevTodo))
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle completion status
  const ToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  // Load todos from local storage on mount
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        }
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
    }
  }, []);

  // Save todos to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(Todos));
    } catch (error) {
      console.error("Error saving todos to localStorage:", error);
    }
  }, [Todos]);

  return (
    <TodoProvider value={{ Todos, addTodo, updateTodo, deleteTodo, ToggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop through and display each TodoItem */}
            {Todos.map(({ id, todo, completed }) => (
              <div key={id} className="w-full">
                <TodoItem id={id} todo={todo} completed={completed} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
