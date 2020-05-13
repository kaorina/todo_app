import React from "react"
import PropTypes from "prop-types"

class TodoList extends React.Component {

  render () {
    const todos = this.props.todos.map((todo, index) =>
      <tr key={index}>
        <td>{todo.id}</td>
        <td>{todo.name}</td>
        <td>{todo.description}</td>
      </tr>
    );
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {todos}
        </tbody>
      </table>
    );
  }
}

TodoList.propTypes = {
  name: PropTypes.string,
  description: PropTypes.node,
};
export default TodoList
