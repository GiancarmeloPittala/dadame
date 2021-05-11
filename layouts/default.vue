<template>
  <div>
    <Menu />
    <section class="relative block bg-red-900" style="height: 500px;">
      <div class="absolute top-0 w-full h-full">
         <Cover />
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
