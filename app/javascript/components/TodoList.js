import React from "react"
import PropTypes from "prop-types"

export default class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      form: {
        name: "",
        description: "",
      }
    };

    /* this.getIndex = this.getIndex.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this); */
  }

  componentDidMount() {
    this.getIndex();
  }

  getIndex(){
    fetch('/api/v1/tasks.json')
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ todos: data}) });
  }

  handleDelete(id){
    fetch('http://localhost:3000/api/v1/tasks/' + id,
   {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
    })
    .then((response) => {
      console.log('Todo was deleted');
      console.log(response);
      this.deleteTodos(id);
    })
  }

  deleteTodos(id){
    let todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: todos
    })
  }

  handleChange(e, key) {
    let target  = e.target;
    let value = target.value;
    let form = this.state.form;
    form[key] = value;

    this.setState({
      form: form
    })
  }

  handleCreate(){
    let body = JSON.stringify({
      task: {
        name: this.state.form.name,
        description: this.state.form.description,
      }
    });

    fetch('http://localhost:3000/api/v1/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then((response) => {return response.json()})
    .then((todo) => {
      this.addTodo(todo);
      this.formReset();
    })
  }

  addTodo(todo){
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  formReset(){
    this.setState({
      form:{
        name: "",
        description: "",
      }
    })
  }

  render () {
    const todos = this.state.todos.map((todo) =>
      <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.name}</td>
        <td>{todo.description}</td>
        <td><button onClick={() => this.handleDelete(todo.id)}>delete</button></td>
      </tr>
    );

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos}
          <tr>
            <td></td>
            <td><input type="text" value={this.state.form.name} onChange={e => this.handleChange(e, 'name')}/></td>
            <td><input type="text" value={this.state.form.description} onChange={e => this.handleChange(e, 'description')}/></td>
            <td><button onClick={() => this.handleCreate()}>add</button></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
