<template>
  <!--Footer-->
  <div class="relative container mx-auto py-6">
    <!--flex container-->

    <div
      class="
        flex flex-col
        md:flex-row
        items-center
        md:justify-between
        space-y-10
      "
    >
      <!--Logo -->
      <div class="pt-2 w-20">
        <img src="../assets/LOgo1.png" alt="" />
      </div>
      <!--menu items-->
      <div class="md:flex space-x-6">
        <a class="hover:text-primaryColor font-medium" href="">About</a>
        <a class="hover:text-primaryColor font-medium" href="">Features</a>
        <a class="hover:text-primaryColor font-medium" href="">Works</a>
        <a class="hover:text-primaryColor font-medium" href="">Support</a>
      </div>

      <!-- right items -->
      <div class="flex space-x-6 mt-6 md:mt-0">
        <!--Login -->
        <img src="../assets/twitter-logo.jpg" alt="" />
        <img src="../assets/logo-fb-simple.png" alt="" />
        <img src="../assets/logo-instagram.png" alt="" />
        <img src="../assets/logo-github.png" alt="" />
        <!--Button-->
      </div>
    </div>

    <div
      class="
        flex
        border-t
        flex-col
        items-center
        md:flex-row md:justify-between
        space-y-16
      "
    >
      <div class="">
        <p>© Copyright 2022, All Rights Reserved</p>
      </div>
      <div class="-mt-10">
        <span>Privacy Policy</span>
        <span>Terms & Cojnditions</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>