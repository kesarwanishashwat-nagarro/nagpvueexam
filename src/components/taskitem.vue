<template>
  <div class="task-container" v-bind:class="{completed : task.done}">
    <div class="task-top">
      <input type="checkbox" @click="stopProp($event)" v-model="task.done">
      <h3>{{task.title}}</h3>
    </div>
    <div class="task-mid">
      <span> deadline:  </span>
      <span>{{new Date(task.deadline).toLocaleDateString("en-US", this.dateOptions)}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'taskitem',
    props: {
    task: { type: Object, required: true },
  },
  data() {
    return {
      dateOptions: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    }
  },
  methods: {
    stopProp(e){
      e.stopPropagation();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .task-container{
    .task-top{
      display: flex;
    }
    .task-mid{
     text-align: left;
     margin-left: 40px;
     margin-top: 10px;
     font-size: 14px;
    }
    padding:20px;
    background: lightyellow;
    &.completed{
      background: lightgreen;
    }
    h3{
      margin: 0px;
      margin-left:20px;
    }
  }
</style>
