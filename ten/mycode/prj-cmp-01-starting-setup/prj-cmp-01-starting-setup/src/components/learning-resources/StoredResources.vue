<template>
     <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :resId ="res.id"
      :resTitle="res.title"
      :resDescription="res.description"
      :resLink="res.link"
    ></learning-resource>
  </ul>
</template>
<script>
import LearningResource from './LearningResource.vue';

export default {
  components:{
        LearningResource,
  },
  // props:['resources','resDescription','resLink']
  inject:['resources']
  
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>