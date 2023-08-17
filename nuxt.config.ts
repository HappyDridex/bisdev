import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/main.scss";',
                },
            },
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./"),
                "~": path.resolve(__dirname, "./"),
            },
        },
        optimizeDeps: {
            exclude: ["js-big-decimal"],
        },
    },
});
