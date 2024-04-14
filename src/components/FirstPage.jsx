import React from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

export default function FirstPage(){
    return(
        <>
        <div className='bg-black h-screen text-white flex flex-col justify-center items-center'>
        <AddTodo />
        <Todos />
        </div>
        </>
    )
}
