<template>
  <article>
    <div class="container px-6 py-32 mx-auto">
      <div class="grid grid-cols-2 gap-5">
        <NuxtLink
          v-for="(client, index) in clients"
          :key="index"
          :to="'/projects/' + client.slug"
          class="col-span-2 md:col-span-1"
        >
          <picture>
            <source
              :srcset="`${client.mainimage}?format=webp`"
              type="image/webp"
            />
            <source :srcset="client.mainimage" type="image/png" />
            <img
              :src="client.mainimage"
              class="object-cover w-full h-auto"
              :alt="client.title"
            />
          </picture>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const clients = await $content('/projects').fetch()

    return {
      clients,
    }
  },
  head() {
    return {
      title: 'Projects',
    }
  },
}
</script>

<style scoped></style>
