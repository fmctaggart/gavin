<template>
  <section
    class="relative flex items-center justify-center w-full overflow-hidden bg-black"
    style="height: 80vh; min-height: 400px;"
  >
    <video
      class="absolute z-0 object-cover w-3/4 h-auto md:w-1/2 lg:w-1/3"
      autoplay
      muted
      loop
      :poster="poster"
    >
      <source :src="require(`~/assets/${video}`)" />
    </video>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Gavin McGregor',
    },
    video: {
      type: String,
      default: 'Type-Master.mpg',
    },
    poster: {
      type: String,
      default: 'Type-Master-poster.png',
    },
  },
}
</script>

<style scoped></style>
