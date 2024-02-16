import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import { TodoSearchLoading } from '../TodoSearchLoading';
import { TodoCounterLoading } from '../TodoCounterLoading';
import { TodosNotFound } from '../TodosNotFound';

function AppUI() {
  const {
    loading,
    error,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <div className='TodoAppContainer'>
        <div className='TodoContainer'>
          <h1>¡Bienvenido!</h1>

          {loading ? (
            <>
              <TodoCounterLoading />

              <TodoSearchLoading />
            </>
          ) : (
            <>
              <TodoCounter />

              <TodoSearch />

              <CreateTodoButton setOpenModal={setOpenModal} />

              {openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}
            </>
          )}

          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && totalTodos === 0 && <EmptyTodos />}
            {!loading && searchedTodos.length === 0 && totalTodos > 0 && (
              <TodosNotFound />
            )}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => {
                  completeTodo(todo.text);
                }}
                onDelete={() => {
                  deleteTodo(todo.text);
                }}
              />
            ))}
          </TodoList>
        </div>
      </div>
    </>
  );
}

export { AppUI };
