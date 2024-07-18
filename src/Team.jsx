import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(10)

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px',
        backgroundColor: '#45322E',
        color: 'white',
    }

    return (

        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}