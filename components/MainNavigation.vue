<template>
  <nav class="fixed z-50 w-full">
    <header
      class="absolute z-50 w-full mx-auto transition-all duration-500"
      :class="[
        topOfPage && darkbg
          ? 'text-white'
          : open
          ? 'bg-black text-white '
          : 'bg-white text-black',
      ]"
    >
      <section
        class="container flex items-center justify-between px-6 py-5 mx-auto"
      >
        <NuxtLink
          to="/"
          class="text-lg uppercase md:text-xl heading"
          :class="{ open: 'text-white' }"
          >Gavin McGregor</NuxtLink
        >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 77.4 57.9"
          xml:space="preserve"
          class="block w-8 h-auto transition-all duration-500 cursor-pointer md:hidden"
          @click="open = !open"
        >
          <g>
            <rect
              x="1.7"
              y="1.9"
              class="fill-current"
              width="74"
              height="8"
            ></rect>
            <rect
              x="1.7"
              y="42.9"
              class="fill-current"
              width="74"
              height="8"
            ></rect>
            <rect
              x="1.7"
              y="22.9"
              class="fill-current"
              width="74"
              height="8"
            ></rect>
          </g>
        </svg>
        <ul class="hidden grid-cols-2 gap-6 text-xs md:grid">
          <li>
            <NuxtLink
              to="/projects"
              class="transition-all duration-500 border-b-2 border-transparent hover:border-gray-500"
              >Projects</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/profile"
              class="transition-all duration-500 border-b-2 border-transparent hover:border-gray-500"
              >Profile</NuxtLink
            >
          </li>
        </ul>
      </section>
    </header>
    <div
      class="fixed z-40 flex items-center justify-center h-full text-white transition-all duration-700 transform bg-black md:hidden heading"
      :class="[open ? '' : '-translate-x-full']"
      style="min-width: 80vw; max-width: 80vw;"
    >
      <ul class="container px-12 mx-auto text-2xl">
        <li class="py-3">
          <NuxtLink
            to="/projects"
            class="transition-all duration-500 border-b-2 border-transparent hover:border-gray-500"
            >Projects</NuxtLink
          >
        </li>
        <li class="py-3">
          <NuxtLink
            to="/profile"
            class="transition-all duration-500 border-b-2 border-transparent hover:border-gray-500"
            >Profile</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import SubMenu from '@/components/Navigation/SubMenu'
export default {
  components: {
    // SubMenu
  },
  data() {
    return {
      topOfPage: true,
      page: 'index',
      open: false,
    }
  },
  computed: {
    darkbg() {
      if (this.page === 'profile' || this.page === 'projects') return false
      return true
    },
  },

  watch: {
    $route() {
      this.page = this.$route.name
      this.open = false
    },
  },
  beforeMount() {
    // window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.onScroll)
    this.page = this.$route.name
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      if (window.pageYOffset > 560) {
        // user is scrolled
        this.topOfPage = false
      } else {
        // user is at top of page
        this.topOfPage = true
      }

      if (currentScrollPosition < 0) return

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 20) return
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
