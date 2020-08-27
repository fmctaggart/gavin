<template>
  <article>
    <div class="container px-6 py-32 mx-auto">
      <div class="grid grid-cols-2 gap-5">
        <NuxtLink
          v-for="(client, index) in clients"
          :key="index"
          :to="'/projects/' + client.shorttitle"
          class="col-span-2 md:col-span-1"
        >
          <picture>
            <source
              :srcset="require(`~/assets/${client.main}?format=webp`)"
              type="image/webp"
            />
            <source
              :srcset="require(`~/assets/${client.main}`)"
              type="image/png"
            />
            <img
              :src="require(`~/assets/${client.main}`)"
              class="object-cover w-full h-auto"
              :alt="client.name"
            />
          </picture>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script>
import clients from '../../static/clients.js'
export default {
  data() {
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
