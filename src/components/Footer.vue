<template>
  <!--Footer-->
  <div class="relative container mx-auto">
    <!--flex container-->

    <div
      class="
        mb-10
        flex flex-col
        md:flex-row
        items-center
        md:justify-between
        space-y-6
      "
    >
      <!--Logo -->
      <div class="pt-12 w-20">
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
        space-y-12
        pt-7
        md:pt-0
      "
    >
      <div class="flex flex-col m:flex-row justify-center">
        <p class="text-GreyColor">&copy; Copyright 2022, All Rights Reserved</p>
      </div>
      <div class="flex flex-row justify-between justify-center space-x-4 pb-12">
        <p class="text-greyColor">Privacy Policy</p>
        <p class="text-greyColor">Terms &amp; Conditions</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>