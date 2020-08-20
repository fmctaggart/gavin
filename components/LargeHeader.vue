<template>
  <section
    class="relative flex items-center justify-center w-full overflow-hidden"
    style="height: 80vh; min-height: 400px;"
  >
    <h1 class="z-20 text-2xl text-white heading lg:text-4xl">
      {{ title }}
    </h1>
    <div
      class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-50"
    ></div>
    <picture>
      <source
        :srcset="`${require(`~/assets/${image}?format=webp`)} `"
        type="image/webp"
      />
      <source :srcset="`${require(`~/assets/${image}`)}`" type="image/png" />
      <img
        :src="require(`~/assets/${image}`)"
        :alt="title"
        class="absolute top-0 left-0 z-0 object-cover w-full h-full"
      />
    </picture>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Gavin McGregor',
    },
    image: {
      type: String,
      default: 'JungleBook-Cover-Image.jpg',
    },
  },
}
</script>

<style scoped></style>
