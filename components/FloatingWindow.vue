<template>
  <div class="floating-window" :class="{'hidden' : hidden, 'faded': faded}">
    <h1>{{ header }}</h1>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FloatingWindow',
  props: {
    header: {
      type: String,
      default () {
        return ''
      }
    },
    text: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      hidden: true,
      faded: true
    }
  },
  methods: {
    show () {
      this.hidden = false
      setTimeout(() => {
        this.faded = false
      }, 500)
      setTimeout(() => {
        this.faded = true
      }, 3000)
      setTimeout(() => {
        this.hidden = true
      }, 4000)
    }
  }
}
</script>

<style scoped>
.floating-window {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 80vw;
  background: black;
  opacity: 0.8;
  position: fixed;
  top: 10vh;
  left: 10vw;
  z-index: 5;
  border-radius: 10vmin;
  padding: 10vmin;
  transition: opacity 700ms ease-in-out;
  text-align: center;
}

.floating-window.faded {
  opacity: 0;
  transition: opacity 700ms ease-in-out;
}

.hidden {
  display: none;
}

h1 {
  color: #aeeff0;
  padding: 0 0 5% 0;
}

p {
  color: white;
}
</style>
