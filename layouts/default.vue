<template>
  <div>
    <NuxtLoadingIndicator />

    <MyNavbar />

    <div class="up">
      <ul>
        <li data-aos="fade-up" data-aos-delay="100">
          <a href="#" id="scrollToTop"><i class="bi bi-arrow-up"></i></a>
        </li>
      </ul>
    </div>

    <slot />

    <MyFooter />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Rahmat Wahyuma Akbar Personal Portfolio",
  meta: [{ name: "description", content: "Icikiwir Cuy WKAKWKAKWKW." }],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css",
    },
    {
      rel: "stylesheet",
      href: "/css/style.css",
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
      tagPosition: "bodyClose",
    },
    {
      src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
      tagPosition: "bodyClose",
    },
    {
      src: "/js/nav.js",
      tagPosition: "bodyClose",
    },
    {
      src: "/js/scroll.js",
      tagPosition: "bodyClose",
    },
    {
      src: "/js/rahmat.js",
      tagPosition: "bodyClose",
    },
  ],
});

onMounted(() => {
  const checkTypeAos = () => {
    if (typeof AOS !== "undefined") {
      AOS.init();
    } else {
      setTimeout(checkTypeAos, 100);
    }
  };
  checkTypeAos();
});
</script>
