<template>
  <div class="item">
    <div>
      <span>{{ todo.title }}</span>
      <input type="checkbox" value="todo.done" @change="toggle" />
    </div>
    <div>
      {{ date }}
    </div>
    <div v-if="todo.done">
      <button @click="remove">remove</button>
    </div>
  </div>
</template>
<script>
  import { computed, defineComponent, PropType } from "vue";
  export default defineComponent({
    props: ["todo"],
    // props: {
    //   todo: {}
    // },
    emits: ["toggle", "remove"],
    setup(props, context){
      const date = computed(function(){
        if(!props.doto){
          return;
        }
        const { createdAt } = props.todo;
        return `${createdAt.getFullYear()}/${createdAt.getMonth() + 1}/${createdAt.getDate()}`;
      });
      const toggle = function(){
        context.emit("toggle", props.todo.id);
      };
      const remove = function(){
        context.emit("remove", props.todo.id);
      };

      return {
        date,
        toggle,
        remove,
      };
    }
  });
</script>
<style scoped>
  .item{
    display: flex;
  }
</style>