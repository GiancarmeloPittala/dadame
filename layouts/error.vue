<template>
  
<main class="bg-white relative overflow-hidden h-screen">
  <div class="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
      <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
          <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
              <h1 class="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
                  Sorry, this page isn&#x27;t available
              </h1>
              <nuxt-link to="/" class="block px-2 py-2 w-36 mt-16 font-light transition ease-in duration-200 hover:bg-red-800 border-2 text-lg  bg-red-900 text-gray-100 focus:outline-none">
                Go back home
              </nuxt-link>
          </div>
          <div class="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
              <img src="~assets/svg/not_found.svg"/>
          </div>
      </div>
  </div>
</main>

</template>

<script>
export default {

}
</script>

<style>

</style>