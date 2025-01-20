import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({

  compatibilityDate: '2025-01-20',

  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  //...
  build: {
    transpile: ['vuetify'],
  },

  plugins: ['~/plugins/firebase'],

  modules: [
    '@pinia/nuxt',

    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
   
    //...
  ],

  vite: {
    server: {
    },

    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },


})