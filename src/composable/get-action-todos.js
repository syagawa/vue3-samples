export default function(todos) {
  const addItem = function(title) {
    const sametitle = todos.value.find(e => {
      return e.title === title;
    });
    if (sametitle) {
      return;
    }

    todos.value = [
      ...todos.value,
      {
        id: new Date().getTime(),
        title,
        done: false,
        createdAt: new Date()
      }
    ];
    console.info(todos.value);
  };

  const removeItem = function(id) {
    todos.value = todos.value.filter(e => {
      return e.id !== id;
    });
  };

  const toggleItem = function(id) {
    const todo = todos.value.find(e => {
      return e.id === id;
    });
    if (!todo) {
      return;
    }
    todo.done = !todo.done;
  };
  return {
    addItem,
    removeItem,
    toggleItem
  };
}
