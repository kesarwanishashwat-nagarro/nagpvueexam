import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: [
      {
        id: 1,
        title: 'TASK 1',
        desc: 'This is first task',
        deadline: "2020-02-12",
        done: true,
        notes: []
      },
      {
        id: 2,
        title: 'TASK 2',
        desc: 'This is second task',
        deadline: "2020-03-27",
        done: false,
        notes: [
          {
            id: 1,
            info: 'This is my 1st note',
            created: "2020-02-10"
          }
        ]
      },
      {
        id: 3,
        title: 'TASK 3',
        desc: 'This is third task',
        deadline: "2020-02-21",
        done: true,
        notes: []
      }
    ],
    selected : null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
