// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // mode: 'jit',
    modules: [
        '@nuxtjs/tailwindcss',
        // '@pinia/nuxt',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        viewer: true,
    },
    // pinia: {
    //     autoImports: [
    //         'defineStore',
    //         ['defineStore', 'definePiniaStore'],
    //     ],
    // },
    ssr: false,
    app: {
        baseURL: '/youtube-project/' // baseURL: '/<repository>/'
    },
});
