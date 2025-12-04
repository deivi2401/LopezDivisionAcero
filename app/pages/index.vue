<template>
  <div class="m-0 p-0 box-border">
    <div class="preloader bg-black fixed top-0 left-0 w-full h-svh flex items-center p-8 overflow-hidden z-10 ">
    <div class="preloader-revealer bg-red-700 absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 scale-x-0 w-full aspect-square will-change-transform z-0">
       <div class="preloader-copy">
      <div class="preloader-copy-col">
        <p>
          Holasdajdajdjajadadjada
        </p>
      </div>
      <div class="preloader-copy-col">
        <p>
          akaskdakdaksakkadkakdad
        </p>
      </div>
    </div>
    </div>
   

    <div class="preloader-counter">
      <p>00</p>
    </div>

  </div>

 <section class="hero relative w-full h-svh will-change-transform overflow-hidden">
  <div class="hero-img absolute top-0 left-0 w-full h-full will-change-transform">
    <img class="w-full h-full object-cover" src="/hero.png" alt="">
  </div>
  <div class="hero-content relative bottom-20 left-1/2 translate-x-1/2 flex flex-col will-change-transform -z-40">
    <div class="product-name bg-slate-200 flex-1 w-full display flex justify-center items-center pt-3 pb-3">
      Ember No. 04
    </div>
    <div class="product-link bg-gray- flex-1 w-full display flex justify-center items-center pt-3 pb-10">
      <a class="" href="#">Ver productos</a>
    </div>
  </div>
 </section>
  </div>
  
</template>

<script lang="js" setup>

</script>

<style>
.preloader {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  will-change: clip-path;
}

</style>