<template>
  <div>
    <nav
      class="navbar navbar-expand-lg"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div class="container fjarmdhn-navbar">
        <a class="navbar-brand" href="/#header">
          RWA
          <small class="d-block text-muted text-small" style="font-size: 10px"
            >Rahmat Wahyuma Akbar</small
          >
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <MyNavbarItem buatsiapa="navbar" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import MyNavbarItem from "/components/Partials/MyNavbarItem.vue";
</script>

<style></style>
