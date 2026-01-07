<template>
  <div
    class="tw-relative tw-flex tw-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-lg:tw-h-[100dvh]"
    id="hero-section"
  >
    <img
      src="/images/homepage/hero-image.jpg"
      alt=""
      class="tw-h-full tw-w-full tw-scale-[1.3] tw-object-cover"
      id="hero-image"
    />
    <div
      class="overlay-gradient tw-absolute tw-top-0 tw-h-full tw-w-full max-lg:tw-z-[2] max-lg:!tw-bg-[#1c1c1ca2]"
    ></div>

    <!-- <div class="tw-absolute tw-bottom-0 
                    tw-right-[10%] max-lg:tw-z-0
                    tw-h-[750px]
                    tw-max-w-[450px]
                    max-md:tw-hidden
                    ">
            <img src="./assets/images/homepage/lawyer.png" 
                alt="law" 
                class="tw-object-cover tw-h-full tw-w-full
                        ">
        </div> -->

    <div
      class="tw-absolute tw-left-[15%] tw-top-[50%] tw-z-[5] tw-flex tw-min-w-[320px] tw-max-w-[500px] tw-translate-y-[-50%] tw-flex-col tw-gap-4 tw-p-2 tw-text-white max-md:tw-left-[50%] max-md:tw-translate-x-[-50%] max-md:tw-place-content-center max-md:tw-place-items-center"
    >
      <h1
        class="khula-font tw-text-xl tw-font-semibold max-md:tw-text-center max-md:tw-text-base"
      >
        Real estate . Property investment . Rentals
      </h1>

      <h2
        class="khula-font tw-text-6xl tw-font-bold tw-uppercase max-md:tw-text-4xl"
      >
        Brick property investment
        <!-- <br class="max-md:tw-hidden">     -->
      </h2>
      <span
        class="tw-mt-2 tw-w-full tw-text-justify tw-text-lg max-md:tw-text-base"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At dolores
        sapiente, ipsa delectus ut consequuntur molestias earum libero aut
        quasi?
      </span>
      <div
        class="tw-mt-3 tw-flex tw-w-full tw-gap-[2%] max-md:tw-flex-col max-md:tw-gap-4"
      >
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          class="tw-flex tw-max-h-[50px] tw-min-w-[180px] tw-place-content-center tw-place-items-center tw-gap-2 tw-bg-white tw-p-3 tw-px-[20px] tw-text-black tw-transition-colors tw-duration-[0.3s] hover:tw-bg-[#100f0f] hover:tw-text-[#fff] max-md:tw-min-w-[100px]"
        >
          <span>Watch video</span>
          <i class="bi bi-camera-video-fill"></i>
        </a>

        <a
          href="#booking"
          class="tw-flex tw-w-full tw-place-content-center tw-place-items-center tw-gap-2 tw-bg-[#000] tw-p-3 tw-text-[#fff] tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-1"
        >
          <span>Contact us</span>
          <i class="bi bi-telephone-fill"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
