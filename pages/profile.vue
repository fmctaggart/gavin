<template>
  <div>
    <section class="container px-24 pt-32 mx-auto">
      <div class="grid grid-cols-6 gap-5 lg:grid-rows-5">
        <div class="object-cover col-span-5 lg:col-span-3 lg:row-span-5">
          <picture>
            <source
              :srcset="`${require(`~/assets/About-Gavin.png?format=webp`)} `"
              type="image/webp"
            />
            <source srcset="~assets/About-Gavin.png" type="image/png" />
            <img
              src="~assets/About-Gavin.png"
              alt="Visit to Vondelpark, Amsterdam"
              class="w-full h-auto"
            />
          </picture>
        </div>
        <div
          class="object-cover col-span-5 col-start-2 mt-4 lg:col-span-3 lg:row-span-4"
        >
          <picture>
            <source
              :srcset="`${require(`~/assets/About-Gavin-2.png?format=webp`)} `"
              type="image/webp"
            />
            <source srcset="~assets/About-Gavin.png" type="image/png" />
            <img
              src="~assets/About-Gavin-2.png"
              alt="Risograph Print Workshop, Glasgow."
              class="w-full h-auto"
            />
          </picture>
        </div>

        <p class="col-span-5 col-start-2 text-xs lg:col-span-3 lg:row-span-1">
          [1] Visit to Vondelpark, Amsterdam.<br />
          [2] Risograph Print Workshop, Glasgow.
        </p>
      </div>
    </section>
    <TextWithTitle title="Overview">
      Heavily influenced by the DIY punk rock and skate scenes I started
      designing t-shirts and posters for bands after school and throughout
      college. I started getting into screen-printing and collecting work from
      my favourite artists & illustrators. I graduated University in 2012 with a
      BA in graphic design and after a short time working as a print technician,
      I started at a busy design studio in Finnieston. I now work with wonderful
      people at Walnut Wasp creative agency designing brands and building
      websites for the food and beverage industry. I love traditional printing
      and in addition to working in a digital print studio, I have also
      completed screen-printing courses at Glasgow Print Studio and risograph
      workshops at Risotto Studios in Glasgow. However I’m also interested in
      digital / web design and I am a self taught front-end developer.
    </TextWithTitle>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Profile',
    }
  },
}
</script>

<style scoped></style>
