import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css'
import NewTodoForm from '../NewTodoForm/NewTodoForm';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
    }

    //creating new todo and getting the value from the child of todoform
    //and adding it into the state
    createTask = (newTodo) => {
        this.setState({
            todos : [...this.state.todos , newTodo]
        })
    }

    removetask = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateTask = (id, updateTodo) => {
        const updateTasks = this.state.todos.map(todo => {
            //check whether the id of the task we are looking for and update the task
            if(todo.id === id){
                return {...todo,task:updateTodo}
            }
            return todo
        })
        this.setState({todos: updateTasks})
    }

    toggleCompletion = (id) => {
        const updateTasks = this.state.todos.map(todo => {
            //check whether the id of the task we are looking for and update the task
            if(todo.id === id){
                return {...todo,completed : !todo.completed}
            }
            return todo
        })
        this.setState({todos: updateTasks})
    }
    render() {
        const todos = this.state.todos.map(todo => (
            //passing the task as props and rendering it using todo
            <Todo 
            key={todo.id} 
            task={todo.task} 
            id={todo.id}
            completed={todo.completed}
            remove={this.removetask}
            update={this.updateTask}
            toggleTodo = {this.toggleCompletion}
            /> 
        ))
        return (
            <div className="TodoList">
                <h1>
                    Todo List 
                    <span>A simple react TodoList App</span>
                </h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm create={this.createTask}/>
            </div>
        )
    }
};

