import { useState, useEffect } from "react";
import './first.css'

export default function First(){
    let [count, setCount] = useState(0)
    
    useEffect(()=>{
        console.log("First Components rendered...")
        // if Component like First() is first() then useEffect not working because The useEffect think first() is a normal function and First() is component. 
    }, [count]);
    return (
        <main>
            <div>{count}</div>
            <button onClick={() => {setCount((number)=> number += 1)}}>Increase</button>
        </main>
    )
}