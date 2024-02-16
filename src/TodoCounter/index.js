import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return completedTodos === totalTodos && totalTodos > 0 ? (
    <h2 className='TodoCounter'>
      ¡Felicidades! Has completado todos los TODOS
    </h2>
  ) : !totalTodos ? (
    <h2 className='TodoCounter'>Por ahora no hay TODOS que completar</h2>
  ) : (
    <h2 className='TodoCounter'>
      Has completado <span>{completedTodos}</span> / <span>{totalTodos} </span>
      TODOS
    </h2>
  );
}

export { TodoCounter };
