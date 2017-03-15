import React from 'react';
import IconButton from '../template/iconButton'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style='success' hide={todo.done} icon='check' onClick={() => props.handleMarkAsDone(todo)}></IconButton>
        </td>
        <td>
          <IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)}></IconButton>
        </td>
        <td>
          <IconButton style='danger' hide={!todo.done} icon='trash-o' onClick={() => props.handleRemove(todo)}></IconButton>
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
          </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
}
