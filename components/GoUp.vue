<template>
  <button :class="showGoUp ? 'opacity-100' : 'opacity-0' " class="fixed opacity-0 transition duration-150 ease-in-out bottom-0 right-0 p-3 bg-red-800 m-5 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
    <a href="#main-menu">
      <svg class="h-10 w-10 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="#fff" aria-hidden="true">
        <path class="absolute" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
</button>
 
</template>


<script>
export default {
  data: () => ({
    showGoUp : false
  }),
  methods: {
    handleScroll () {
      // Your scroll handling here
      if(window.scrollY >= 250)
        this.showGoUp = true
      else
        this.showGoUp = false

    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>