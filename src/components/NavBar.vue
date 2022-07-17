<template>
  <!--NavBar-->
  <nav class="testing relative container mx-auto py-6">
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
      <div class="hidden md:block space-x-6">
        <!--Login -->
        <a class="hover:text-primaryColor mt-3 font-medium" href="">Login</a>

        <!--Button-->
        <CustomButton text="Get Started Free" />
      </div>

      <!-- Hamburger secgtion -->
      <button
        id="menu-btn"
        class="open md:hidden hamburger focus:outline-none block"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden">
      <div
        id="menu"
        class="
          absolute
          flex-col
          items-center
          self-end
          hidden
          py-8
          mt-10
          space-y-6
          font-bold
          bg-white
          sm:w-auto sm:w-auto sm:self-center
          left-6
          right-6
          drop-shadow-md
        "
      >
        <a class="hover:text-primaryColor font-medium" href="">Demos</a>
        <a class="hover:text-primaryColor font-medium" href="">About</a>
        <a class="hover:text-primaryColor font-medium" href="">Blog</a>
        <a class="hover:text-primaryColor font-medium" href="">Pages</a>
        <a class="hover:text-primaryColor font-medium" href="">Contact</a>
      </div>
    </div>
  </nav>
</template>
<script>
import CustomButton from "../components/forms/CustomButton.vue";

export default {
  name: "NavBar",
  components: {
    CustomButton,
  },

  mounted: () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");

    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      nav.classList.toggle("flex");
      nav.classList.toggle("hidden");
    });
  },
};
</script>