import React, { Component } from 'react'
import './Todo.css'

//responsible for rendering task
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
    }

    toggleEditForm = (event) => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleClick = () => {
        this.props.remove(this.props.id)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUpdate = (event) => {
        event.preventDefault()
        //take new task data and pass it upto parent
        this.props.update(this.props.id, this.state.task)
        this.setState({ isEditing: false })
    }

    handleToggle = () => {
        this.props.toggleTodo(this.props.id)
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            name="task"
                            onChange={this.handleChange}
                            value={this.state.task}
                        />
                        <button>save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                        onClick={this.handleToggle}>
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleEditForm}>
                        <i className='fas fa-pen' />
                        </button>
                        <button onClick={this.handleClick}>
                        <i className='fas fa-trash' />
                        </button>
                    </div>
                </div>
            )
        }
        return (
            result
        )
    }
};

