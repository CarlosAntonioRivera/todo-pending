import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type='check'
      color={completed ? '#020617' : '#f8fafc'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
