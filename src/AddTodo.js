import React from 'react'

class AddTodo extends React.Component {

    state = {
        content : ''
    }
    
    handlechange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handlesubmit =(e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.addtodo(this.state)

    }

    render() {
        return (
            <div className="AddTodo">
                <form onSubmit={this.handlesubmit}>
                <input onChange={this.handlechange}/>
                <button type="submit">Submit task</button>    
                </form>
             </div>

        )
    }
}

export default AddTodo


