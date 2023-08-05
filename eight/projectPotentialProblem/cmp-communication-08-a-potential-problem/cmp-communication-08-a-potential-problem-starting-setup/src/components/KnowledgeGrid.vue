<template>
  <ul>
    <!-- <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element> -->
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"      
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  //remove props as we are getting the info from the injection/provide
  // props: ['topics'],
  //remove emits because we are injecting and provide info from knowledge element
  // emits: ['select-topic'],
  // injection info come from provide app.vue
  inject:['topics']
};
</script>