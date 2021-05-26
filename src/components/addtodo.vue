<template>
  <input type="text" v-model="state.inputValue" />
  <button @click="onClick" :disabled="disabled">add</button>
  <p v-if="state.hasError" class="error">Title is too long !!</p>
</template>
<script>
  import { defineComponent, reactive, watchEffect, computed } from "vue";
  export default defineComponent({
    emits:  ["add"],
    props: ["items"],
    setup(props, context){
      const state = reactive({
        inputValue: "",
        hasError: false,
      });
      const onClick = function(){
        context.emit("add", state.inputValue);
        state.inputValue = "";
      };

      watchEffect(function(){
        if(state.inputValue.length > 10){
          state.hasError = true;
        }else {
          state.hasError = false;
        }
      });

      const disabled = computed(function(){
        if(state.hasError){
          return true;
        }
        if(state.inputValue.length === 0){
          return true;
        }
        if(props.items.find(e => e.title === state.inputValue)){
          return true;
        }
        return false;
      });



      return {
        state,
        onClick,
        disabled,
        
      }
    }
  });
</script>
<style scoped>
  .error{
    color: red;
  }
</style>