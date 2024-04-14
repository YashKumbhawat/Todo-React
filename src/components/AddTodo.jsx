import React, { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import {useDispatch,useSelector} from 'react-redux'
import axios from "axios";


function AddTodo(){

    const [text,setText] = useState('');

    const dispatch = useDispatch();
    const count = useSelector(state => state.count)

    const submit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');
    }


    return(
        <>
        <div>
        <form onSubmit={submit} className="w-9/11 h-10 w-full flex justify-between items-center px-4 py-2 bg-gray-800 gap-10 rounded-md">
            <label className= "text-black rounded-md"> 
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} disabled={count>=10}
                 placeholder={(count>=10) ? " FULL" : " Enter your ToDo"}
                 className="rounded-sm h-7 w-96 text-xl"/>
            </label>
            <button type="submit" disabled={count>=10}
            className="bg-orange-600 border-black rounded-lg px-2 py-1 px"
            >ADD</button>
        </form>
        </div>
        </>
    )
}

export default AddTodo;