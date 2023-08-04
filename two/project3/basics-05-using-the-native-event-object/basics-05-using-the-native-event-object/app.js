const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullName: ''
    };
  },
  computed:{    
    fullName(){
      if(this.name === ""){
        return '';
      } else {
        return this.name + ' ' + "Cam";
      }  
    }
  },
  watch:{
  //   name(value){
  //     if(value === ''){
  //       this.fullName = '';
  //     } else {
  //       this.fullName = value + ' ' + "Cam";
  //     }      
  //   },
  counter(value){
    if(value > 30){
      this.counter = 0;
    }
  },
  },
  methods: {
    // setName(event) {
    //   this.name = event.target.value;
    // },
    // outputFullName(){
    //   if(this.name === ""){
    //     return '';
    //   } else {
    //     return this.name + ' ' + "Cam";
    //   }     
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset(){
      this.name= '';
    }
  }
});

app.mount('#events');
