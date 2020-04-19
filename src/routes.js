import Home from './components/Home.vue'
import Start from './components/Start.vue'
import Play from './components/Play.vue'
import Waiting from './components/Waiting.vue'



export const routes = [
  { path: '/', component: Home },
  { path: '/start', component: Start },
  { path: '/play', component: Play },
  { path: '/waiting', component: Waiting },
];
