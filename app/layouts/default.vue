<template>
  <div class="tw-flex tw-min-h-[100vh] tw-w-full tw-flex-col tw-bg-[#ffffff]">
<Header />

  <main>
    <slot />
  </main>

  <Footer class="tw-flex tw-w-full tw-place-content-around tw-gap-3 tw-bg-[#000] tw-p-[5%] tw-px-[10%] tw-text-white max-lg:tw-flex-col"/>

  </div>
  </template>

<script lang="ts" setup>

</script>

<style>

</style>