import React, { useState } from 'react'

const Shopping = () => {
    const [content,setContent]=useState("");
    const [tasks,setTasks]=useState([]);
    
    const handleInput= (e) => {
        setContent(e.target.value)
    }
    const handleAddItem= () => {
        const value=content
        if(value!="")
        {
        const arr=[...tasks]
        arr.push(value)
        setTasks(arr)
        setContent("")
        }
    }
    const handleDelete = (index) => setTasks(tasks.filter((_, i) => i !== index));
  return (
    <div className="Shopping-list">
        <div className="input-text">
            <input type="text" name="" id="" value={content} onChange={handleInput}/>
            <button onClick={handleAddItem}>Add</button>
        </div>
        <h2>Shopping items</h2>
        <ul className="items">
            {tasks.map((items,index) => {
                return <li key={index}>
                        <span>{items}</span>
                        <button onClick={() => {
                            handleDelete(index)
                        }}>delete</button>
                    </li>
            })}
        </ul>
    </div>
  )
}

export default Shopping
