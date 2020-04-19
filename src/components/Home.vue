<template>
  <v-container>
    <h1>UVU Feud!</h1>
    <h2>Go to http://feud.heatherbutterfield.com/start</h2>
    <h2>Enter the code <b>{{getRoomCode()}}</b></h2>
    <div v-for="name in names" v-bind:key="name">
    <v-card
      class="mx-auto text-center"
      max-width="200"
      height="200"
      outlined
    >
    <v-card-title>{{name}}</v-card-title>
    <i class="fas fa-user fa-7x"></i>
    </v-card>
    </div>
  </v-container>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'Home',
  data: () => ({
    socket : io('localhost:3001'),
    names: []
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
  },
  mounted() {
    this.socket.on('MESSAGE', (data) => {
        this.names.push(data.message)
    });
  }
};
</script>
