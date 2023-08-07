<template>
  <div>
     <the-header title="memememe"></the-header>
    <!-- <stored-resources :resources="storedResources"></stored-resources> -->
    <the-resources></the-resources>
  </div> 
</template>
<script>

import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    TheHeader,TheResources
   },
  // data() {
  //   return {
  //     storedResources: [
  //       {
  //         id: 'official-guide',
  //         title: 'Vue Guide',
  //         description: 'The official Vue documentation',
  //         link: ' https://vuejs.org',
  //       },
  //       {
  //         id: 'google-search',
  //         title: ' Google',
  //         description: 'Search tool Google',
  //         link: ' https://www.google.com',
  //       },
  //     ],
  //   };
  // },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
