import React, { Component } from 'react'
import './NewTodForm.css'
import uuid from 'uuid/dist/v4'

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : ""
        }
    }
    
    //getting the value from the input and setting the state
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    //sending the data up to the parent using props and creating new task
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.create({...this.state , id : uuid() , completed:false})
        this.setState({ task : ""})
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input type="text" 
                id="task" 
                name="task" 
                value={this.state.task} 
                onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
};
