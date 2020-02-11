<template>
  <div class="task-conatiner">
    <div class="top" v-bind:class="{completed : task.done}">
      <h1>{{task.title}}</h1>
      <p><span style="font-weight: bolder">Deadline: </span> {{new Date(task.deadline).toLocaleDateString("en-US", this.dateOptions)}}</p>
    </div>
    <p>{{task.desc}}</p>
    <hr>
    <div class="note-conatiner">
      <form>
      <div>
          <textarea
          rows="8"
          placeholder="Note Info"
          v-model="note.info"
        ></textarea>
      </div>
      <button
        type="button"
        @click="saveNote"
      >Add Note</button>
    </form>
      <ul>
        <li v-for="note in task.notes" v-bind:key="note.id">
          <div class="note">
            <h3>{{note.info}}</h3>
            <p>Added On: {{note.created}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    task () {
      return this.$store.state.selected || 
      this.$store.state.taskList.filter((t) => t.id === this.$route.params.taskid)
    },
    // notes() {
    //   return this.task.notes ? this.task.notes.sort((a,b) =>  new Date(a.created) - new Date(b.created)) : []
    // }
  },
  data() {
    return {
      dateOptions: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      note: {
        info: '',
        created: new Date()
      }
    }
  },
  methods: {
    saveNote(){
      const currentTask = this.task;
      if(this.note.info){
        currentTask.notes.splice(0, 0, this.note);
        this.note = {
          info: '',
          created: new Date()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .task-conatiner{
    .top{
      padding: 50px;
      background: lightyellow;
      &.completed{
        background: lightgreen;
      }
    }
    .note-conatiner{
      max-width:400px;
      margin: 0 auto;
      margin-top: 10px;
      li{
        list-style-type: none;
      }
      .note{
        background: lightgrey;
        padding: 20px;
        margin: 20px 0px;
        p{
          font-size: 14px;
        }
      }
    }
  }
</style>
