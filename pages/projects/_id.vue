<template>
  <div v-if="info">
    <LargeHeader :title="info.title" :image="info.header" />
    <div class="container flex justify-center w-full px-6 py-32 mx-auto">
      <article class="w-full pt-6 md:w-2/3 lg:w-1/2">
        <h2 v-if="info.heading" class="mb-3 text-3xl heading lg:text-4xl">
          {{ info.heading }}
        </h2>
        <h2 v-else class="mb-3 text-3xl heading lg:text-4xl">
          {{ info.title }}
        </h2>
        <p v-if="info.brief" class="lg:text-lg">{{ info.brief }}</p>
        <NuxtLink
          to="/projects"
          class="float-right mt-6 text-xl duration-300 trasition-all hover:text-gray-600"
          >See all Projects ⏎</NuxtLink
        >
      </article>
    </div>
    <div class="container px-6 pb-24 mx-auto">
      <section class="grid grid-cols-2 gap-5">
        <div class="col-span-2">
          <picture>
            <source
              :srcset="require(`~/assets/${info.images[0]}?format=webp`)"
              type="image/webp"
            />
            <source
              :srcset="require(`~/assets/${info.images[0]}`)"
              type="image/png"
            />
            <img
              :src="require(`~/assets/${info.images[0]}`)"
              class="w-full h-auto"
              :alt="info.title"
            />
          </picture>
        </div>
        <div
          v-for="(image, index) in info.images.slice(1, info.images.length)"
          :key="index"
          class="col-span-2 md:col-span-1"
        >
          <picture>
            <source
              :srcset="require(`~/assets/${image}?format=webp`)"
              type="image/webp"
            />
            <source :srcset="require(`~/assets/${image}`)" type="image/png" />
            <img
              :src="require(`~/assets/${image}`)"
              class="w-full h-auto"
              :alt="info.title + ' ' + index"
            />
          </picture>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import clients from '../../static/clients.js'
export default {
  data() {
    return {
      info: '',
    }
  },

  mounted() {
    this.info = clients.find((x) => x.shorttitle === this.$route.params.id)
  },
  head() {
    return {
      title: this.info.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.title,
        },
      ],
    }
  },
}
</script>

<style scoped>
li {
  @apply list-inside list-disc;
}
</style>
