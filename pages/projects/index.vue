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
          <img
            :src="require(`~/assets/${client.main}`)"
            :alt="client.name"
            class="object-cover w-full h-auto"
          />
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
}
</script>

<style scoped></style>
