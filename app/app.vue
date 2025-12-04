<script setup lang="js">
import GreetingCard from './components/Slide1/GreetingCard.vue';
import { VueLenis, useLenis } from 'lenis/vue';
import { watch } from 'vue'

const lenisOptions = {
  // lenis options (optional)
}

const lenis = useLenis((lenis) => {
  // called every scroll
  console.log(lenis)
})

watch(
  lenis,
  (lenis) => {
    // lenis instance
    console.log(lenis)
  },
  { immediate: true }
)
</script>

<template>
  <VueLenis :options="lenisOptions"/>
  <div class="font-mono">
   <NuxtLayout>
    <NuxtPage />
   </NuxtLayout>
     

  </div>
</template>
