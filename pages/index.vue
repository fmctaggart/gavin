<template>
  <article>
    <HeaderVideo poster="Type-Master-poster.png" video="Type-Master.mp4" />
    <TextWithTitle title="Creative Thinking for Exciting Brands">
      Gavin is a graphic designer and website developer living in Glasgow.
      Specialising in branding; He is involved in planning, building and
      executing designs for businesses, tailored to expressing all facets of the
      brand story.
    </TextWithTitle>
    <div class="container px-6 mx-auto">
      <NuxtLink to="/projects/buddys-bbq" aria-label="Buddy's BBQ">
        <video
          class="object-cover w-full h-auto"
          autoplay
          muted
          loop
          poster="~assets/Buddys-Icon-Swap.png"
        >
          <source src="~assets/Buddys-Icon-Swap.mp4" />
        </video>
      </NuxtLink>
      <NuxtLink
        to="/projects/reagan"
        class="grid w-full mt-8 md:grid-cols-4"
        aria-label="Reagan Hallet"
      >
        <section class="md:col-span-3">
          <img
            src="~assets/reagan/1.png"
            alt="Reagan Hallet"
            class="w-full h-auto"
          />
        </section>
        <section class="items-end hidden align-bottom md:flex md:col-span-1">
          <video class="self-end w-full h-auto" autoplay muted loop>
            <source src="~assets/reagan/Reagan-Icon-Master.mp4" />
          </video>
        </section>
      </NuxtLink>
    </div>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: 'Homepage',
    }
  },
}
</script>

<style></style>
