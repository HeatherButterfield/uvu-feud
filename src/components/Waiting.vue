<template>
  <v-container class="text-center">
    <h2>Waiting</h2>
    <v-progress-circular
      indeterminate
      color="green"
    ></v-progress-circular>
  </v-container>
</template>

<script>

export default {
  name: 'Waiting',

  data: () => ({
    //
  }),
};
</script>
