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
        to="/projects/reagan-hallett"
        class="grid w-full mt-8 md:grid-cols-6"
        aria-label="Reagan Hallet"
      >
        <section class="md:col-span-4">
          <img
            src="~assets/reagan/1.png"
            alt="Reagan Hallet"
            class="w-full h-auto"
          />
        </section>
        <section class="items-end hidden align-bottom md:flex md:col-span-2">
          <video class="self-end w-full h-auto" autoplay muted loop>
            <source src="~assets/reagan/Reagan-Icon-Master.mp4" />
          </video>
        </section>
      </NuxtLink>
    </div>
    <div class="container flex justify-center w-full px-6 pt-16 mx-auto">
      <section class="w-full pt-6 md:w-2/3 lg:w-1/2">
        <NuxtLink to="/projects/nick-bruce" aria-label="Buddy's BBQ">
          <video
            class="object-cover w-full h-auto"
            autoplay
            muted
            loop
            poster="~assets/nick-bruce/Nick-Bruce-Zoom-Master.png"
          >
            <source src="~assets/nick-bruce/Nick-Bruce-Zoom-Master.mp4" />
          </video>
        </NuxtLink>
      </section>
    </div>

    <TextWithTitle title="Services & Skills.">
      Having developed skills a wide range of disciplines, Gavin brings his
      expertise to every stage of the branding process. He has hands on
      experience with: Brand strategy and planning; Art direction; Identity
      design for logos and brand systems; Designs for digital and print; Web
      design and development; Animation for motion graphics; Storyboarding for
      video pre-production; Illustration; Type and lettering design.
    </TextWithTitle>
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
