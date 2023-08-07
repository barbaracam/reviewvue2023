<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <practice-slot>
      <template #default="slotProp">
        <h2>{{slotProp.item}}</h2>
        <p>{{ slotProp.anotherItem }}</p>
      </template>
    </practice-slot>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import PracticeSlot from './components/PracticeSlot.vue';

export default {
  components:{
    'the-header': TheHeader,
    'badge-list': BadgeList,
    'user-info': UserInfo,
    'practice-slot': PracticeSlot

  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>