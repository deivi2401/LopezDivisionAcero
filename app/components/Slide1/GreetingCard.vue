<template>
  <div>
    <section class="layout">
      <div class="header text-cyan-500 bg-red-600">LOPEZ DIVISION ACERO</div>
      <div class="main bg-cyan-600">Soluciones integrales en acero</div>
    </section>

  </div>
</template>

<script lang="js" setup>

</script>

<style>
.layout {
  @apply w-full h-fit grid gap-2;
  grid:
    "header" auto
    "main" auto
    / auto;
}
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}


.header { grid-area: header; }
.main { grid-area: main; }
</style>