// https://nuxt.com/docs/api/configuration/nuxt-config
// runtimeConfig is:
// 1. Hydrated on Client-side
// 2. Can include .env variables
// 3. Reactive
// 4. Partial type-support
// 5. Cannot be configured per request
// 6. Does not change on HMR
// 7. does not include non-primitive types
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  $production: {

  },
  $development: {

  },
  runtimeConfig: { 
    //anything here is unavailable on the client
  
    public: { //anything here is available on the client
    
    }
  },
  // use below if using vite.config, webpack.config, postcss.config, or nitro.config
  nitro: {
    // if exists
  },
  postcss: {
    // if exists
  },
  vite: {
    // if exists, can also use webpack
    vue: {
      customElement: true,
    }
  }
})
