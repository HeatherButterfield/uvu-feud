import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store';
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'https://feud.heatherbutterfield.com',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}))

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
