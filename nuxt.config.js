import clients from './static/clients.js'
const dynamicRoutes = () => {
  return new Promise((resolve) => {
    resolve(clients.map((el) => `/projects/${el.shorttitle}`))
  })
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: 'Gavin McGregor - %s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:title',
        content: 'Gavin McGregor',
      },
      {
        property: 'og:description',
        content:
          'Gavin is a graphic designer and website developer living in Glasgow. Specialising in branding; He is involved in planning, building and executing designs for businesses, tailored to expressing all facets of the brand story.',
      },
      {
        property: 'og:url',
        content: 'https://gavin.mctweb.co.uk',
      },
      // {
      //   property: 'og:image',
      //   content: 'https://fmctaggart.co.uk/MCT-LARGE.png'
      // },
      {
        hid: 'description',
        name: 'description',
        content:
          'Gavin is a graphic designer and website developer living in Glasgow. Specialising in branding; He is involved in planning, building and executing designs for businesses, tailored to expressing all facets of the brand story.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Graphic Designer, Website Developer, websites, design, web developer, websites',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85,
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8],
    },
    webp: {
      quality: 85,
    },
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/sitemap', 'nuxt-lazy-load'],
  sitemap: {
    hostname: 'https://gavin.mctweb.co.uk',
    gzip: true,
    filter({ routes }) {
      return routes.map((route) => {
        route.url = `${route.url}/`
        return route
      })
    },
  },
  pwa: {
    icon: {
      iconSrc: './icon.png',
    },
    manifest: {
      name: 'Gavin McGregor',
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
