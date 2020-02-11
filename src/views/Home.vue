<template>
  <div class="home">
    <div class="left">
      <div class="order">
        <span style="font-weight: bolder">
          Sort By: </span><span class="sort-item" @click="sortByStatus()">Completed Status
            </span> <span class="sort-item"  @click="sortByDate()">Deadline</span>
      </div>
      <ol>
        <li class="task-item"
        v-for="task in tasksList" v-bind:key="task.id" @click="onTaskSelect(task)">
            <taskitem :task="task" />
        </li>
      </ol>
    </div>
    <div class="right">
      <taskForm />
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import taskitem from '@/components/taskitem.vue'
import taskForm from '@/components/taskForm.vue'
import { SELECT_TASK } from '../store/types/actions.type'
export default {
  name: 'Home',
  components: {
    taskitem,
    taskForm
  },
  computed: {
    /** the the updated tasks list from store */
    tasksList() {
      return this.$store.state.taskList
    }
  },
  methods: {
    /** On selection of single task. */
    onTaskSelect(task){
      this.$store.dispatch(SELECT_TASK, task)
        this.$router.push({
          name: 'task',
          params: {
            taskid: task.id
          }
        })
    },
    /** Sort the list of task based on completion status. */
    sortByStatus(){
      this.tasksList.sort((a,b) => b.done - a.done)
    },
    /** sort the tasks based on deadline date */
    sortByDate() {
      this.tasksList.sort((a,b) =>  new Date(a.deadline) - new Date(b.deadline))
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    .left{
      float: left;
      width: 60%;
      .order{
        text-align: left;
        margin-left:40px;
        .sort-item{
          font-size: 14px;
          color: blue;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
    .right{
      float: right;
      width: 40%;
    }
    .clear{
      clear: both;
    }
    .task-item{
      margin: 20px 0px;
      cursor: pointer;
    }
  }
</style>