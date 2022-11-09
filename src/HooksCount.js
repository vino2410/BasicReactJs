import'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export const Number=()=>
{
    const [count,setCount]=useState(0)

    const add=()=>
    {
        setCount(count+1)
    }
    const fun=()=>
    {
        setCount(0)
    }

    return(
        <>
        <button className="btn btn-outline-Primary" onClick={add} onDoubleClick={fun}>
        onclick -
            <span style={{backgroundColor:'burlywood'}}> {count}</span>
        </button>
        </> 

    );
}