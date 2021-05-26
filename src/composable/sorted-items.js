import { computed, isRef, Ref } from 'vue';

export default function(todos) {
  const items = computed(function() {
    const asc = Math.random() > 0.5 ? true : false;
    return todos.value.sort((a, b) => {
      if (asc) {
        return a.createdAt.getTime() - b.createdAt.getTime();
      } else {
        return b.createdAt.getTime() - a.createdAt.getTime();
      }
    });
  });
  return {
    items
  };
}
