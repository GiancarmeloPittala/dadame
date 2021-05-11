<template>
  <div>
    <splide :options="options">

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

</template>


<script>
export default {
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
      transition: 'fade',
      i18n: {
        prev: 'Previous slide',
        next: 'Next slide',
      }
    },
    slides: [
      { src: '/images/cover/1.jpeg' },
      { src: '/images/cover/2.jpeg' },
      { src: '/images/cover/3.jpeg' },
    ]

  }),
  mounted(){
    
  }
   

}

  
</script>

<style lang="scss">
.agile__actions{
  .agile__dots{
    width: 10px;
    height: 10px;
    border-radius: 50% ;
    background: rgba(155, 44, 44, .9);
    &.agile__dot--current{
     background: rgba(155, 44, 44, .7);
    }
  }
  .agile__nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background: rgba(155, 44, 44, .9);
    border-radius: 50%;
    font-weight: 800;
    font-size: 1rem;
    color: white;
    &.agile__nav-button--prev:hover,
    &.agile__nav-button--next:hover{
      background: rgba(155, 44, 44, .8);

    }
    &.agile__nav-button--prev{
      left: 0;
      margin-left: 10px;
    }
    &.agile__nav-button--next{
      right: 0;
      margin-right: 10px;
    }
  }
 
}
</style>

