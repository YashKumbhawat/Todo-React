import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import {removeTodo,updateTodo, completeTodo} from '../features/todo/todoSlice'

function Todos(){

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    let right = useSelector(state => state.right);
    let count = useSelector(state => state.count);
    const completed = useSelector(state => state.complete)
    // const [checked,setChecked] = useState(false);

    // function completeTask(){
    //     dispatch(completeTodo());
    //     setChecked(true);
    // }

    return(
        <>
        <div className="flex justify-between items-center w-9/12">
        <div className="text-3xl mt-3">To-Do's</div>
        <div className="text-2xl"><span className=" text-green-600">{right}</span> / {count}</div>
        </div>
        <div className="flex flex-col justify-center items-center w-9/12 h-4/6 bg-gray-400 mt-2">
        {
        todos.map((todo) => (
            <div key={todo.id} className={`w-full m-1.5 h-7 bg-white flex justify-between text-black px-3 rounded-md
            text-xl text-center font-bold ${todo.status ? 'text-green-700' : 'text-red-700'}`}>
                {todo.text}
                <div className="flex justify-center gap-3 items-center">
                {!todo.status && <button onClick={() => dispatch(completeTodo(todo))}>✔</button>}
                <button onClick={ () => dispatch(removeTodo(todo.id))}>❌</button>
                </div>
            </div>
        )
        )}
        </div>
        <button onClick={()=> {todos.map((todo)=> dispatch(removeTodo(todo.id)))}} 
        className="bg-gray-600 px-2 py-1 rounded-lg mt-2">
            RESET
        </button>
        </>
    )
}

export default Todos;