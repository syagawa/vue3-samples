import { ref } from 'vue';

export default function() {
  const todos = ref([]);

  return {
    todos
  };
}
