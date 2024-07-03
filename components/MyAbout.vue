<template>
  <div>
    <section class="about" id="about">
      <div class="container">
        <div class="row text-center">
          <h3 class="medium-header" data-aos="fade-up" data-aos-delay="100">
            About Me
          </h3>
        </div>
        <div class="row justify-content-between">
          <div class="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <!-- <img
              src="~public/images/Group 40.png"
              class="img-fluid"
              alt="fjarmdhn__"
            /> -->
            <dotlottie-player
              src="https://lottie.host/f87ce3b1-f8db-4380-970d-85bd0ef94bc4/UNYppKDX7j.json"
              background="transparent"
              speed="1"
              class="img-fluid"
              direction="1"
              playMode="normal"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div
            class="col-lg-5 copywriting align-self-center"
            data-aos="fade-up"
          >
            <p class="small-copy" data-aos="fade-up" data-aos-delay="300">
              19 Years Old
            </p>
            <h1 class="medium-header" data-aos="fade-up" data-aos-delay="400">
              Undergraduate Informatic Student
            </h1>
            <p class="small-copy" data-aos="fade-up" data-aos-delay="500">
              University of Amikom Yogyakarta
            </p>
            <p class="primary-copy" data-aos="fade-up" data-aos-delay="600">
              Proficient in web development and interested in complex system
              architecture. Have knowledge of APIs, microservices, devOps. Have
              a lot of experience in participating in web development. I am a
              hard worker and a lifelong learner.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  script: [
    {
      src: "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs",
      tagPosition: "head",
      type: "module",
    },
  ],
});
</script>

<style></style>
