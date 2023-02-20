// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // mode: 'jit',
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        viewer: true,
    },
    ssr: false,
    app: {
        baseURL: '/youtube-project/' // baseURL: '/<repository>/'
    },
});
