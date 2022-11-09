import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export const Hook=()=>
{
    const [user,setUser]=useState("")

    const print=()=>
    {
        alert(user+ "Has been successfully added")
    }

    const result=(name)=>
    {
       setUser(name.target.value)
    }
    return(
        <>
        <input type="text" placeholder="Enter name" name={user} onChange={result} />
        <button onClick={print} className="btn btn-outline-danger">
            Click here
        </button>
        </>

    );
}