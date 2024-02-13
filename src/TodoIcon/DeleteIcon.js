import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type='delete'
      color='#f8fafc'
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
