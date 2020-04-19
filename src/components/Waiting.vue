<template>
  <v-container class="text-center">
    <h2>Waiting...</h2>
    <v-progress-circular
      indeterminate
      color="green"
    ></v-progress-circular>
    <router-link to="/play" tag="span">
      <v-btn class="white--text margin-top" color="green" width="100%" x-large :disabled="disabled">Everyone's In</v-btn>
    </router-link>
  </v-container>
</template>

<style>
  .margin-top {
    margin-top: 20px;
  }
</style>

<script>

export default {
  name: 'Waiting',

  data: () => ({
    //
  }),
};
</script>
