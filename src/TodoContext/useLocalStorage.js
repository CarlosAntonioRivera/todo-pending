import React from 'react';

// Creación de un Custom Hook
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [initialValue, itemName]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Completar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Desayunar', completed: true },
//   { text: 'Almorzar', completed: false },
// ];

// const stringifiedTodos = JSON.stringify(defaultTodos)

// localStorage.setItem('TODOS_V1', stringifiedTodos o JSON.stringify(defaultTodos))

// Convertir en String lo que está en Javascript
// JSON.stringify(defaultTodos)

// localStorage.removeItem('TODOS_V1');
