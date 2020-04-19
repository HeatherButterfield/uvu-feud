<template>
  <v-container>
    <h1>UVU Feud!</h1>
    <h2>Go to http://feud.heatherbutterfield.com/play</h2>
    <h2>Enter the code <b>{{getRoomCode()}}</b></h2>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({

  }),
  methods: {
    getRoomCode() {
      const alphaNum = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      let code = '';
      code += alphaNum[Math.round(Math.random() * 36)];
      code += alphaNum[Math.round(Math.random() * 36)];
      code += alphaNum[Math.round(Math.random() * 36)];
      code += alphaNum[Math.round(Math.random() * 36)];
      return code;
    }
  }
};
</script>
