<template>
    <div>
    <h2>Add Task</h2>
    <form>
      <input type="text" required
      placeholder="Task Title" 
      v-model="task.title" />
      <textarea
        rows="8"
        placeholder="Task Description"
        v-model="task.desc"
      ></textarea>
      <input type="date" required
      placeholder="Task Deadline" 
      v-model="task.deadline" />
      <button
        type="button"
        @click="saveTask"
      >Save Task</button>
    </form>
    </div>
</template>

<script>
import { ADD_TASK } from '../store/types/actions.type'
export default {
  name: 'taskForm',
    data () {
    return {
      /** add 7 days to current date */
      in_a_week  : new Date().setDate(new Date().getDate()+7),
      /** default task object */
      task: {
        id: 0,
        title: '',
        desc: '',
        done: false,
        deadline: null
      },
      errors: null
    }
  },
  methods: {
    /** save task when from is filled with title */
    saveTask () {
      if(this.task && this.task.title){
        const taskList = this.$store.state.taskList;
        let maxId = 0;
        taskList.forEach(t => {
          if(t.id > maxId){
            maxId = t.id;
          }
        });
        this.task.id = maxId + 1;
        if(!this.task.deadline){
          this.task.deadline = new Date(this.in_a_week);
        }
        this.$store.dispatch(ADD_TASK, this.task)
        this.task = {
          title: '',
          desc: '',
          done: false,
          deadline: new Date()
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  form{
    padding: 10px 40px;
    input, textarea, button{
      min-height: 30px;
      width: 100%;
      font-size: 16px;
      padding: 4px;
      margin: 5px 0px;
    }
  }
</style>
