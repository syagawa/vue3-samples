<template>
  <todo-item
    v-for="item in items"
    :todo="item"
    :key="item.id"
    @toggle="toggleItem"
    @remove="removeItem"
  />
  <add-todo
    @add="addItem"
    :items="items"
  />
</template>

<script>
  import { computed, defineComponent, reactive, watchEffect, watch, onMounted, toRefs } from "vue";
  import TodoItem from "./todoitem.vue";
  import AddTodo from "./addtodo.vue";
  import getTodos from "../composable/get-todos.js";
  import sortedItems from "../composable/sorted-items.js";
  import getActionTodos from "../composable/get-action-todos.js";

  export default defineComponent({
    components: {
      TodoItem,
      AddTodo,
    },
    setup(){
      const { todos } = getTodos();

      const { items } = sortedItems(todos);
      const { addItem, removeItem, toggleItem } = getActionTodos(todos);

      watchEffect(function(){
        console.info("in watachEffect", todos);
      });

      watch([todos], function([nv_todos, ov_todos]){
        console.info("in watch", nv_todos);
      });


      return {
        items,
        addItem,
        removeItem,
        toggleItem
      }
    }
  });
</script>