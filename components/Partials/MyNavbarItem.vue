<template>
  <ul
    :class="
      props.buatsiapa == 'footer'
        ? 'footer-nav text-center'
        : 'navbar-nav ms-auto'
    "
  >
    <li class="nav-item">
      <NuxtLink to="#header" :external="true" class="nav-link">Home</NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink to="#about" :external="true" class="nav-link">About</NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink to="#skills" :external="true" class="nav-link">Skills</NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink to="#portfolio" :external="true" class="nav-link"
        >Portfolio</NuxtLink
      >
    </li>
    <li class="nav-item">
      <NuxtLink to="#contact" :external="true" class="nav-link"
        >Contact</NuxtLink
      >
    </li>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps(["buatsiapa"]);
</script>

<style></style>
