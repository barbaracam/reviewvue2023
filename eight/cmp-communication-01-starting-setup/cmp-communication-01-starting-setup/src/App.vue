<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="addContactMain"></new-friend>
    <ul>
      <friend-contact 
      v-for="friend in friends" 
      :key="friend.id"
      :id="friend.id"
      :name-person="friend.name" 
      :phone-number="friend.phone" 
      :email-address="friend.email" 
      :is-fav ="friend.isFav"
      @toggle-fav="toggleFavStatus"
      @delete-friend="deleteBFF"
      ></friend-contact>
      <!-- we remove code below to change for a for loop -->
      <!-- <friend-contact name-person="Mamita" phone-number="1234" email-address="email@email.com" :is-fav ="true"></friend-contact>
      <friend-contact name-person="Papito" phone-number="9876" email-address="email@email.ca" :is-fav="false"></friend-contact> -->
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "mama",
          name: "Mama Chiong",
          phone: "0123 45678 90",
          email: "mama@localhost.com",
          isFav: true
        },
        {
          id: "papa",
          name: "Papa Cam",
          phone: "0987 654421 21",
          email: "papa@localhost.com",
          isFav: false
        },
      ],
    };
  },
  methods: {
    toggleFavStatus(friendId){
      const realFav = this.friends.find(friend => friend.id === friendId);
      realFav.isFav = !realFav.isFav;
    },
    addContactMain(thename, thephone, theemail){
      const newContact = {
        id: new Date().toISOString,
        // the properties have to be the same as dummy info
        name: thename,
        phone: thephone,
        email: theemail,
        isFav: false,        
      }
      this.friends.push(newContact);
    },
    deleteBFF(friendId){
      //overwritte the array friends
      //filter, will keep all the friends with different id and keep them, and have a new friend array without the specific friend we want to delete
      this.friends = this.friends.filter(friend => friend.id !== friendId);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li, #app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>