const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    add(num){
      this.counter = this.counter + num;
    },
    less(num){
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event){
      event.preventDefault();
      alert("submit");
    },
    submitForm2(){     
      alert("submit2");
    },
    confirmedInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
