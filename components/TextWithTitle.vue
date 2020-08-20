<template>
  <div class="container flex justify-center w-full px-6 py-32 mx-auto">
    <article class="w-full pt-6 md:w-2/3 lg:w-1/2">
      <h2 class="mb-3 text-2xl mb:text-3xl heading lg:text-4xl">
        {{ title }}
      </h2>

      <p class="lg:text-lg"><slot></slot></p>
      <NuxtLink
        to="/projects"
        class="float-right mt-6 text-xl duration-300 trasition-all hover:text-gray-600"
        >See all Projects ⏎</NuxtLink
      >
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: 'Title',
    },
  },
}
</script>

<style scoped></style>
