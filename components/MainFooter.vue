<template>
  <div class="w-full mt-12 text-white bg-black">
    <div
      class="container grid grid-cols-3 gap-12 px-6 py-16 mx-auto lg:grid-cols-12"
    >
      <h6
        class="col-span-1 text-lg transition-all duration-300 logo heading hover:text-gray-500"
      >
        <NuxtLink to="/">G</NuxtLink>
      </h6>
      <div class="grid grid-cols-2 col-span-3 text-xs md:col-start-4">
        <ul>
          <li>
            <NuxtLink
              to="/"
              class="transition-all duration-300 hover:text-gray-500"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/projects"
              class="transition-all duration-300 hover:text-gray-500"
              >Projects</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/profile"
              class="transition-all duration-300 hover:text-gray-500"
              >Profile</NuxtLink
            >
          </li>
        </ul>
        <ul>
          <li class="transition-all duration-300 hover:text-gray-500">
            <a href="https://www.instagram.com/_gavinmcgregor/" target="__blank"
              >Instagram</a
            >
          </li>
          <li class="transition-all duration-300 hover:text-gray-500">
            <a href="https://www.pinterest.co.uk/gurven/" target="__blank"
              >Pinterest</a
            >
          </li>
        </ul>
      </div>
      <p class="text-xs text-right lg:col-end-12">
        © {{ new Date().getFullYear() }}
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
ul li {
  @apply pb-2;
}
</style>
