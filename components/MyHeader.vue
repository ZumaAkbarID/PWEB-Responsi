<template>
  <div>
    <section class="header" id="header">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="col-lg-5 copywriting align-self-center text-center-mobile"
            data-aos="fade-up"
          >
            <p class="small-copy" data-aos="fade-up" data-aos-delay="200">
              Hello I'am
            </p>
            <h1 class="big-header" data-aos="fade-up" data-aos-delay="300">
              Rahmat Wahyuma Akbar
            </h1>
            <p
              class="small-copy"
              id="custom_teks"
              data-aos="fade-up"
              data-aos-delay="400"
            ></p>
          </div>

          <div class="col-lg-5" data-aos="zoom-in" data-aos-delay="600">
            <img
              src="~public/images/Group 40.png"
              class="img-fluid"
              alt="fjarmdhn__"
            />
          </div>
          <div class="social-icon">
            <MySocial />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import MySocial from "/components/Partials/MySocial.vue";

useHead({
  script: [
    {
      src: "https://unpkg.com/typewriter-effect@latest/dist/core.js",
      tagPosition: "bodyClose",
    },
  ],
});

onMounted(() => {
  const checkTypewriter = () => {
    if (typeof Typewriter !== "undefined") {
      const custom_teks = document.getElementById("custom_teks");

      if (custom_teks) {
        const typewriter = new Typewriter(custom_teks, {
          loop: true,
        });

        typewriter
          .typeString("Fullstack Web Developer")
          .pauseFor(2500)
          .deleteAll()
          .typeString("BackEnd Developer")
          .pauseFor(2500)
          .deleteAll()
          .typeString("Junior Mobile Developer")
          .pauseFor(2500)
          .start();
      }
    } else {
      setTimeout(checkTypewriter, 100);
    }
  };
  checkTypewriter();
});
</script>
