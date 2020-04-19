<template>
  <v-container>
    <h2 class="text-center">Welcome to UVU Feud!</h2>
    <v-form>
      <v-text-field
        v-model="room"
        @input="checkValues"
        label="Room Code"
        background-color="white"
        solo
        maxlength="4"
      ></v-text-field>
      <v-text-field
        v-model="name"
        label="Name"
        @input="checkValues"
        solo
        background-color="white"
        maxlength="10"
      ></v-text-field>
      <router-link to="/waiting" tag="span">
        <v-btn class="white--text" color="green" width="100%" x-large :disabled="disabled" @click="sendName">Play</v-btn>
      </router-link>
    </v-form>
  </v-container>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'Start',
  data: () => ({
    disabled: true,
    name: "",
    room: "",
    socket : io('localhost:3001')
  }),
  methods: {
    checkValues() {
      this.room = this.room.toUpperCase();
      if (this.room != this.room.replace(/[^0-9a-zA-Z]/g,'')) {
        this.room = this.room.replace(/[^0-9a-zA-Z]/g,'');
      }
      if (this.name && this.room.length === 4) {
        this.disabled = false;
      }
    },
    sendName() {
      this.socket.emit('SEND_MESSAGE', {
          message: this.name
      });
    }
  }
};
</script>
