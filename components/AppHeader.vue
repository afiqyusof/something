<template>
  <div>
    <!--
      The nav will only be shown on screens >= 1081px in width
      (desktops, etc). The homepage link is the logo in the top left of the
      screen.

      Meanwhile, the toggle-container will be shown on screens <= 1080px. It
      contains a toggle which will activate/deactivate the side drawer
      containing all the necessary links. Homepage link is listed as 'Home'.
    -->
    <header class="app-header" :class="{'hidden': !showHeader}">
      <nav class="navigation">
        <a v-smooth-scroll="{duration: 500}" href="#home" class="logowords">
          <strong>AFIQ</strong>YUSOF
        </a>
        <div class="separator" />
        <ul v-for="page in pages" :key="page.name">
          <li>
            <a v-smooth-scroll="{duration: 500}" :href="'#' + page.link" class="linkerinos">
              {{ page.name }}
            </a>
          </li>
        </ul>
        <div class="toggle-container">
          <div class="separator" />
          <button
            class="toggle"
            :class="{'active': toggleActive}"
            @click="toggleActive=!toggleActive"
          >
            <div class="toggle-line line-top" :class="{'active': toggleActive}" />
            <div class="toggle-line line-center" :class="{'active': toggleActive}" />
            <div class="toggle-line line-bottom" :class="{'active': toggleActive}" />
          </button>
        </div>
      </nav>

      <div class="side-drawer" :class="{'show': toggleActive}">
        <div v-for="page in pages" :key="page.name">
          <a v-smooth-scroll="{duration: 500}" :href="'#' + page.link" class="side-drawer-card linkerinos" @click="toggleActive=!toggleActive">
            {{ page.name }}
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  transition: 'fadein',

  /**
   * showHeader           boolean   Whether the header should be shown.
   * lastScrollPosition   number    The last scrolled position.
   * toggleActive         boolean   Whether the side drawer should be
   *                                activated.
   * authListener         listener  The listener for onAuthStateChanged.
   * loggedIn             boolean   Whether the user is logged in.
   */
  data () {
    return {
      showHeader: true,
      lastScrollPosition: 0,
      toggleActive: false,
      pages: [
        {
          'name': 'ABOUT ME',
          'link': 'about'
        }, {
          'name': 'WORK',
          'link': 'work'
        }, {
          'name': 'EDUCATION',
          'link': 'education'
        }, {
          'name': 'SKILLS',
          'link': 'skills'
        }
      ]
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {

    /**
     * Handles the scroll event.
     */
    onScroll () {
      // SCROLL_OFFSET sets amount of pixels being scrolled before show/hide.
      const SCROLL_OFFSET = 30
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < SCROLL_OFFSET) {
        return
      }
      this.showHeader = currentScrollPosition < this.lastScrollPosition
      this.toggleActive = false
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped>
.linkerinos {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.app-header {
  z-index: 30;
  position: fixed;
  transform: translate3d(0, 0, 0);
  opacity: 0.9;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  -webkit-transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  font-family: Ubuntu;
}

.app-header.hidden {
  opacity: 0;
  transform: translate3d(0, -60px, 0);
}

.loggedin {
  display: none;
}

.logowords {
  font-family: Roboto;
  font-size: 30px;
  color: white;
  margin-left: 0px;
  text-decoration: none;
  color: #aeeff0;
}

.separator {
  flex: 1;
}

.navigation {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: #272f35;
  width: 100%;
  left: 0;
  height: 60px;
}

.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navigation li {
  padding: 0 1rem;
}

.navigation ul li a {
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease-in-out;
}

.navigation ul li a:hover {
  color: #aeeff0;
}

.toggle-container {
  height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
}

.toggle {
  height: calc(30px + 1vw);
  width: calc(30px + 1vw);
  background: transparent;
  border-style: solid;
  box-sizing: border-box;
  border-color: white;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: 0.2s border-color ease-in-out, 0.2s border-radius ease-in-out;
  z-index: 2;
}

.toggle:focus {
  outline: none;
}

.toggle-line {
  width: 20px;
  height: 2px;
  margin: 3px 0;
  background: white;
  transition: 0.2s background ease-in-out, 0.2s opacity ease-in-out, 0.2s transform ease-in-out;
  transform-origin: 50% 50%;
}

.toggle-line.line-center.active {
  opacity: 0;
}

.toggle-line.line-top.active {
  transform: translate(0, 8px) rotate(225deg);
}

.toggle-line.line-bottom.active {
  transform: translate(0, -8px) rotate(-225deg);
}

.top-spacer {
  width: 100%;
  height: 45px;
}

.toggle.active {
  border-color: #aeeff0;
  border-radius: 100%;
}

.toggle-line.active {
  background: #aeeff0;
}

.side-drawer {
  position: fixed;
  top: 0px;
  right: 0;
  width: 80vw;
  transform: translateX(80vw);
  height: 100vh;
  background: rgb(8, 12, 17);
  opacity: 0.9;
  transition: 0.2s transform ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.side-drawer-card {
  width: 80vw;
  height: 13vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.side-drawer-card a {
  text-decoration: none;
}

.side-drawer.show {
  transform: translateX(0);
}

@media (max-width: 1080px) {
  li {
    display: none;
  }
}
@media (min-width: 1081px) {
  .toggle-container {
    display: none;
  }
  .side-drawer {
    display: none;
  }

  .top-spacer {
    height: 100px;
  }
}
</style>
