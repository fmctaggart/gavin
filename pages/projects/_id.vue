<template>
  <div v-if="info">
    <LargeHeader :title="info.title" :image="info.headerimage" />
    <div class="container flex justify-center w-full px-6 py-32 mx-auto">
      <article class="w-full pt-6 md:w-2/3 lg:w-1/2">
        <h2 v-if="info.description" class="mb-3 text-3xl heading lg:text-4xl">
          {{ info.description }}
        </h2>
        <h2 v-else class="mb-3 text-3xl heading lg:text-4xl">
          {{ info.title }}
        </h2>
        <nuxt-content :document="info" class="prose prose-lg" />
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
              :srcset="`${info.allImages[0].photo}?format=webp`"
              type="image/webp"
            />
            <source :srcset="info.allImages[0].photo" type="image/png" />
            <img
              :src="info.allImages[0].photo"
              class="w-full h-auto"
              :alt="info.allImages[0].name"
            />
          </picture>
        </div>
        <div
          v-for="(image, index) in info.allImages.slice(
            1,
            info.allImages.length
          )"
          :key="index"
          class="col-span-2 md:col-span-1"
        >
          <picture>
            <source :srcset="`${image.photo}?format=webp`" type="image/webp" />
            <source :srcset="image.photo" type="image/png" />
            <img :src="image.photo" class="w-full h-auto" :alt="image.name" />
          </picture>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const info = await $content('/projects/' + params.id || 'index').fetch()
    return {
      info,
    }
  },

  head() {
    return {
      title: this.info.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.info.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.info.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.info.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.info.description,
        },
      ],
    }
  },
}
</script>

<style>
.prose h1 {
  @apply my-2;
}
.prose h2 {
  @apply text-gray-800 mt-12 mb-3 leading-tight;
}
.prose > a {
  @apply font-semibold  no-underline duration-200 px-1;
}
.prose > a:hover {
  @apply bg-gray-100;
}
</style>
