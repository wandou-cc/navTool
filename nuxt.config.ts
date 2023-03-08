// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    // https://vite.nuxtjs.org/misc/common-issues/#styleresources

    css: [
    // "@/assets/less/global.less",
    // "@/assets/less/_global.scss"
    ],
    build: {
        transpile:
      process.env.NODE_ENV === 'production'
          ? [
              'naive-ui',
              'vueuc',
              '@css-render/vue3-ssr',
              '@juggle/resize-observer'
          ]
          : ['@juggle/resize-observer']
    },
    vite: {
        optimizeDeps: {
            include:
        process.env.NODE_ENV === 'development'
            ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
            : []
        },
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: '@import "@/assets/less/global.less";'
                }
            }
        }
    }
})
