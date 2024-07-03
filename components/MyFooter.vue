<template>
  <div>
    <footer class="footer">
      <hr data-aos="zoom-in" data-aos-delay="100" />
      <div class="container">
        <div class="row">
          <div class="col-12 text-center" data-aos="zoom-in">
            <div class="social-icon">
              <MySocial />
            </div>
            <nav class="footer-nav text-center">
              <MyNavbarItem buatsiapa="footer" />
            </nav>
            <p class="pt-4 pb-2" data-aos="fade-up" data-aos-delay="1000">
              {{ currentDate.getFullYear() }} &copy; Copyright Rahmat Wahyuma
              Akbar. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import MySocial from "/components/Partials/MySocial.vue";
import MyNavbarItem from "/components/Partials/MyNavbarItem.vue";

const currentDate = ref(new Date());
</script>

<style></style>
