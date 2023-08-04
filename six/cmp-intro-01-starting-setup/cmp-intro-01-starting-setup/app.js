const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: 'mama',
                    name: 'celina',
                    phone: '12345678',
                    email: 'mama@yahoo.com' 
                },
                {
                    id: 'papa',
                    name: 'julio',
                    phone: '87654321',
                    email: 'papa@yahoo.com' 
                }
                
            ]
        }   
    }, 
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.component('friend-contact', {
    template:`<li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show' }}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>  `,
  data(){
    return {
        detailsAreVisible: false,
        friend: {
            id: 'mama',
            name: 'celina',
            phone: '12345678',
            email: 'mama@yahoo.com' 

        }
    }
  },
  methods:{
    toggleDetails(){
        this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
})
 app.mount('#app');