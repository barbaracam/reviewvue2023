const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [] };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoalValue);
    },
    remove(idx){
      this.goals.splice(idx,1);
    }
  }
});

app.mount('#user-goals');
