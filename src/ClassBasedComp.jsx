import React from 'react'

class ClassBasedComp extends React.Component {
    constructor(){
        super()
        this.state = {
            name : "Tushar",
            age : 25,
            address : "Odisha"
        }
    }
    handelState = () => {
        console.log("btn is clicked")
        this.setState({
                name: "modi ji",
                age : 65,
                address : "India"
            })
    }
    render(){
        return(
            <>
                <h1 style={{color : "red"}}>Class Based Component</h1>
                <h2>Name is {this.state.name}, Age is {this.state.age} and Address is {this.state.address}</h2>
                <h3><button onClick={this.handelState}>Change the state</button></h3>
            </>
        )
    }
}

export default ClassBasedComp
