<template>
  <li>
    <h2>{{ namePerson }}  {{isFav  ? 'Favourite' : ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
     <button @click="toggleFav">Toggle Fav</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  // props:['namePerson', 'phoneNumber', 'emailAddress', 'isFav'],
  props:{
    id:{
      type:String,
      required: true
    },
    namePerson : {
      type: String,
      required: true
   }, 
    phoneNumber: String,
    emailAddress: String,
    isFav: {
      type: Boolean,
      required: true,
      default: false
   },
  },
  emits:{
    'toggle-fav': function(id){
      if(id){
        return true
      } else {
        console.warn('no id yet');
        return false;
        
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "0123 45678 90",
      //   email: "manuel@localhost.com",
      // },
      // friendIsFav: this.isFav
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav(){
      //this will modify the data in appeareance but no the real data so we use the emit approach
      // this.friendIsFav = !this.friendIsFav;
      this.$emit('toggle-fav',this.id );
       
    },
    deleteFriend(){
       this.$emit('delete-friend',this.id );
    }
  }
};
</script>