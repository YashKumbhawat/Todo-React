import React from "react";
import { useSelector} from "react-redux";

export default function SecondPage(){

    let total = useSelector(state => state.count);
    let right = useSelector(state => state.right);

    return(
        <>
        <div className="bg-black h-screen w-screen text-white">
            Total Numver of Completed Todos : {right}
            <br/>
            Total Number of Todos Listed : {total}
            <br/>
            Total Percentage : {(right/total)*100}
        </div>
        </>
    )
}