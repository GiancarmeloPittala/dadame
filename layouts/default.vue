<template>
  <div>
    <Menu />
    <section class="relative block bg-red-900" style="height: 500px;">
      <div class="absolute top-0 w-full h-full">
         <!-- <Cover /> -->
         <splide :options="options" :slides="slides">
           
            <splide-slide v-for="slide in slides" :key="slide.src">
              <img :src="slide.src">
            </splide-slide>

            <template v-slot:controls>
              <div class="splide__progress">
                <div class="splide__progress__bar">
                </div>
              </div>
            </template>

          </splide>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px;"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-red-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
    <section class="relative py-16 bg-red-900">
      <div class="sm:container mx-auto sm:px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <client-only>
              <Nuxt />
            </client-only>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
   components: {
    Splide,
    SplideSlide,
  },
  data: () => ({
    options: {
      type      : 'loop',
      rewind : true,
      width  : "100vw",
      fixedHeight:500,
      clones: 2,
      perPage: 1,
      autoplay    : true,
      pauseOnHover: true,
      gap    : '1rem',
      pagination  : false,
      cover       : true,
      // focus       : 'center',
      transition: 'fade'
    },
    slides: [
      { src: '/images/cover/1.jpeg' },
      { src: '/images/cover/2.jpeg' },
      { src: '/images/cover/3.jpeg' },
    ]

  })
  
}
</script>
