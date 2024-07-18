import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleRemove = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{border: '2px solid green',padding:'15px',borderRadius:'10px',backgroundColor:'#616161'}}>
        
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button style={{margin:'10px'}} onClick={handleRemove}>Remove</button>
        </div>
    )
}