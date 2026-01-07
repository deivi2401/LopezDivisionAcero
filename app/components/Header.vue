<template>
  <div class="tw-fixed tw-top-0 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-px-[10%] max-lg:tw-mr-auto lg:tw-justify-around">
  <div class="tw-relative tw-z-50">

    <!-- Expanding white background -->
    <div
      ref="expandingBg"
      class="tw-absolute tw-left-0 tw-top-0 tw-z-[-1] tw-h-0 tw-w-full tw-bg-white tw-shadow-md"
      v-gsap.whenVisible.from="{ opacity: 0, x: -32 }"
    />

    <!-- Logo -->
    <div class="tw-flex tw-w-max tw-place-items-center tw-gap-3">
      <div class="tw-h-[50px] tw-w-[50px] tw-p-[4px]">
        <img
          src="/logo.png"
          alt="logo"
          class="tw-object tw-h-full tw-w-full"
        />
      </div>
    </div>

    <!-- Collapsible menu -->
    <div
      ref="collapseHeaderItems"
      class="collapsible-header animated-collapse"
    >
      <div
        class="tw-flex tw-h-full tw-w-max tw-gap-5 tw-text-base tw-text-white
               max-lg:tw-mt-[30px] max-lg:tw-flex-col max-lg:tw-place-items-end
               max-lg:tw-gap-5 lg:tw-mx-auto lg:tw-place-items-center"
      >
        <a
          v-for="(link, i) in links"
          :key="i"
          ref="headerLinks"
          :href="link.href"
          class="header-links"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Social icons -->
      <div
        class="tw-flex tw-place-items-center tw-gap-[20px] tw-text-xl
               max-lg:tw-w-full max-lg:tw-place-content-center max-lg:!tw-text-white"
      >
        <a
          v-for="(social, i) in socials"
          :key="i"
          :href="social.href"
          target="_blank"
          rel="no-referrer"
          class="header-links tw-transition-colors tw-duration-[0.3s]"
        >
          <i :class="social.icon" />
        </a>
      </div>
    </div>

    <!-- Collapse button -->
    <button
      ref="collapseBtn"
      class="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl lg:tw-hidden"
      aria-label="menu"
      @click="toggleHeader"
    />
</div>
  </div>
</template>

<script lang="js" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const { $gsap, $ScrollTrigger } = useNuxtApp()

const RESPONSIVE_WIDTH = 1024

const headerWhiteBg = ref(false)
const isHeaderCollapsed = ref(true)

const expandingBg = ref(null)
const collapseHeaderItems = ref(null)
const collapseBtn = ref(null)
const headerLinks = ref([])

/* =========================
   Navigation data
========================= */
const links = [
  { label: 'About us', href: '' },
  { label: 'Team', href: '' },
  { label: 'Projects', href: '' },
  { label: 'Contact us', href: '#booking' }
]

const socials = [
  { icon: 'bi bi-instagram', href: 'https://www.instagram.com/' },
  { icon: 'bi bi-twitter', href: 'https://twitter.com/pauls_freeman' },
  { icon: 'bi bi-facebook', href: 'https://www.facebook.com/' }
]

/* =========================
   GSAP – expanding bg
========================= */
const expandingBgAnimation = () => ({
  height: '100%',
  duration: 3,
  scrollTrigger: {
    trigger: 'body',
    start: '50px 10px',
    end: '80px 50px',
    scrub: 1
  }
})

/* =========================
   Toggle header
========================= */
function toggleHeader() {
  if (isHeaderCollapsed.value) {
    collapseHeaderItems.value.style.width = '60vw'
    collapseHeaderItems.value.class.add('!tw-opacity-100')

    collapseBtn.value.classList.replace('bi-list', 'bi-x')
    collapseBtn.value.classList.add('tw-text-white')

    isHeaderCollapsed.value = false
    setTimeout(() => window.addEventListener('click', onClickOutside), 1)
  } else {
    collapseHeaderItems.value.style.width = '0vw'
    collapseHeaderItems.value.classList.remove('!tw-opacity-100')

    collapseBtn.value.classList.replace('bi-x', 'bi-list')

    if (headerWhiteBg.value) {
      collapseBtn.value.classList.add('primary-text-color')
    }

    isHeaderCollapsed.value = true
    window.removeEventListener('click', onClickOutside)
  }
}

/* =========================
   Click outside
========================= */
function onClickOutside(e) {
  if (!collapseHeaderItems.value.contains(e.target)) {
    toggleHeader()
  }
}

/* =========================
   Responsive
========================= */
function responsive() {
  if (window.innerWidth > RESPONSIVE_WIDTH) {
    collapseHeaderItems.value.style.width = ''
  } else {
    isHeaderCollapsed.value = true
    collapseBtn.value.classList.add(
      'bi-list',
      headerWhiteBg.value ? 'primary-text-color' : ''
    )
  }
}

onMounted(() => {

  $gsap.to


isHeaderCollapsed.value = window.innerWidth < RESPONSIVE_WIDTH
  window.addEventListener('resize', responsive)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', responsive)
})

</script>

<style>

</style>