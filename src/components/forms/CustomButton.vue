<template>
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
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>