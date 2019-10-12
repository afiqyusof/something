import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal, {
  duration: 1000,
  scale: 0.8,
  distance: '50px',
  delay: 100,
  mobile: true,
  origin: 'bottom'
})
