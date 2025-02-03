// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo">
      <p className="todoTilte">{title}</p>
      <button className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
