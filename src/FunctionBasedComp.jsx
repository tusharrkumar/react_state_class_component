import { useState } from "react"

function FunctionBasedComp() {
    const[data,setData] = useState({
        name: "modi ji",
        age : 65,
        address : "India"
    })

    const btnChange = () => {
        setData({
            name : "Tushar",
            age : 25,
            address : "Odisha"
        });
    }
    return (
        <>
        <h1 style={{color : "red"}}>Function Based Component</h1>
        <h2>Name is {data.name}, Age is {data.age} and Address is {data.address}</h2>
        <button onClick={btnChange}>Change the state</button>
        </>
    )
}

export default FunctionBasedComp
