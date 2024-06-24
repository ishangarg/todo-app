export function TodoItem({completed, id, title, toggleChecked, deleteTodo}){
    return (
        <li>
          <label>
            <input type='checkbox' checked={completed} 
              onChange={e => toggleChecked(id, e.target.checked)}
            />
            {title}
          </label>
          <button 
          onClick={() => deleteTodo(id)} 
          className='btn btn-danger'>Delete</button>
        </li>
    )
}