<template>
  <div>
    <AppHeader />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Mono'
      }
    ]
  },
  components: {
    AppHeader
  }
}
</script>

<style>
html {
  font-family: Ubuntu, Roboto, 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

body {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity .5s;
}

.page-enter,
.page-leave-active,
.layout-enter,
.layout-leave-active {
  opacity: 0;
}
</style>
