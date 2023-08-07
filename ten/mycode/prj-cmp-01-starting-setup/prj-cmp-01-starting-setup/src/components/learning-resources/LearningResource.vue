<template>
    <li>
        <base-card>
            <header>
                <h3>{{resTitle}}</h3>
                <base-button mode="flat" @click='deleteResource(resId)'>Delete</base-button> 
                <!-- <base-button type="submit">Delete</base-button> -->
            </header>       
            <p>{{resDescription}}</p>
            <nav>
                <a :href="resLink">View {{resTitle}}</a>
            </nav> 
      </base-card>
    </li>
</template>

<script>

export default {    
    props:['resId', 'resTitle', 'resDescription','resLink'],
    inject:['deleteResource']   
}
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
