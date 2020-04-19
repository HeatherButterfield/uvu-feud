<template>
  <v-app class="green darken-4">
    <router-view></router-view>
  </v-app>
</template>

<style>
  #app {
    background-color: #275D38;
    color: white;
  }
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 3rem;
  }
</style>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
