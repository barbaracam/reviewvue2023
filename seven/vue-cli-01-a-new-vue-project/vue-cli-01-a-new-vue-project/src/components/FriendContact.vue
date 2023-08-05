<template>    
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>        
        <ul>
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>            
        </ul>        
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'Mama',
                name: 'Celina',
                phone: '12345678',
                email: 'mama@yahoo.com' 
            }
        }
    },
    computed: {

    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}
</script>
