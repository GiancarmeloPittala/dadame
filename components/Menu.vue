<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div id="main-menu">
  <nav class="bg-red-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <nuxt-link to="/">
              <img class="h-10 w-10 hover:scale-150 transform duration-75 transition-all ease-in-out" src="/images/icon/android-chrome-192x192.png" alt="Dadame Icon">
            </nuxt-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <nuxt-link 
                class="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium capitalize"
                :class="$nuxt.$route.path == item.path ? 'bg-red-900 text-white' : '' " 
                v-for="(item,i) of menuItems" 
                :key="'menuItem'+i" 
                :to="item.path">
                {{item.name == 'index' ? 'Home' : item.name}}
              </nuxt-link>
              <a href="#chi-siamo" class="link">Chi siamo</a>
              <a href="#Contatti" class="link">Contatti</a>
            </div>
          </div>
        </div>
        <!-- <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            
            
             <div class="ml-3 relative">
              <div>
                <button class="bg-red-900 p-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true" @click="userMenuOpen = !userMenuOpen">
                  <span class="sr-only">Open user menu</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
              <div v-if="userMenuOpen" @mouseleave="userMenuOpen = false" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              </div>
            </div> 
          </div>
        </div> -->
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button @click="menuIsOpen = !menuIsOpen" class="bg-red-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg :class="menuIsOpen ? 'hidden' : 'block' " class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg :class="menuIsOpen ? 'block' : 'hidden' " class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div :class="menuIsOpen ? 'block' : 'hidden'" @mouseleave="menuIsOpen = false" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <nuxt-link 
          class="link"
          :class="$nuxt.$route.path == item.path ? 'bg-red-900 text-white' : '' " 
          v-for="(item,i) of menuItems" 
          :key="'menuMobileItem'+i" 
          :to="item.path">
          {{item.name == 'index' ? 'Home' : item.name}}
        </nuxt-link>
        <a href="#chi-siamo" class="link">Chi siamo</a>
        <a href="#Contatti" class="link">Contatti</a>
      </div>
      <!-- <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <button class="bg-red-900 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true" @click="userMenuOpen = !userMenuOpen">
              <span class="sr-only">Open user menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">Tom Cook</div>
            <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-red-700">Your Profile</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-red-700">Settings</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-red-700">Sign out</a>
        </div>
      </div> -->
    </div>
  </nav>

  <header class="bg-white shadow-md">
    <div class="py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-around">
      <h2 v-if="!$nuxt.$route.params.slug" class="text-xl font-bold leading-tight text-gray-900 capitalize">
        {{ $nuxt.$route.name == 'index' ? 'home' : $nuxt.$route.name ? $nuxt.$route.name.replace('-',' ') : '' }}
      </h2>
      <h2 v-else class="text-xl font-bold leading-tight text-gray-900 capitalize">
        {{ $nuxt.$route.params.slug  }}
      </h2>
      <!-- <ul class="flex items-center gap-x-2">
        <li>
          <nuxt-link class="bg-red-900 text-gray-100 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium capitalize" to="/#chi-siamo">Chi Siamo</nuxt-link>
        </li>
        <li>
          <nuxt-link class="bg-red-900 text-gray-100 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium capitalize" to="/#Contatti">Contatti</nuxt-link>
        </li>
      </ul> -->
    </div>
  </header>

</div>
</template>
<script>
export default {
  data: () => ({
    userMenuOpen : false,
    menuIsOpen: false,
    menuItems: [],
    searchText: '',
    listMenuItemsShow:[
      'index'
    ],
  }),
  created() {
    this.$router.options.routes.forEach(route => {
      if(this.listMenuItemsShow.indexOf(route.name) != -1)
      this.menuItems.push({
          name: route.name.replace('-',' ')
          , path: route.path
      })
    });
  }
}
</script>

<style lang="scss" scoped>
.link{
  @apply text-gray-300;
  @apply block;
  @apply px-3;
  @apply py-2;
  @apply rounded-md;
  @apply text-sm;
  @apply font-medium;
  @apply capitalize;
  &:hover{
    @apply bg-red-700;
    @apply text-white;
  }
}
</style>