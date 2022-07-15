<template>
  <!--NavBar-->
  <nav class="relative container mx-auto p-6">
    <!--flex container-->

    <div class="flex items-center justify-between">
      <!--Logo -->
      <div class="pt-2 w-20">
        <img src="../assets/LOgo1.png" alt="" />
      </div>
      <!--menu items-->
      <div class="hidden md:flex space-x-6">
        <a class="hover:text-primaryColor font-medium" href="">Demos</a>
        <a class="hover:text-primaryColor font-medium" href="">About</a>
        <a class="hover:text-primaryColor font-medium" href="">Blog</a>
        <a class="hover:text-primaryColor font-medium" href="">Pages</a>
        <a class="hover:text-primaryColor font-medium" href="">Contact</a>
      </div>

      <!-- right items -->
      <div class="hidden md:flex space-x-6">
        <!--Login -->
        <a class="hover:text-primaryColor mt-3 font-medium" href="">Login</a>

        <!--Button-->
        <a
          class="
            p-3
            px-6
            pt-3
            py-4
            text-white
            font-medium
            bg-primaryColor
            rounded
            hover:bg-primaryColorLight
          "
          href=""
        >
          Get Started Free
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>