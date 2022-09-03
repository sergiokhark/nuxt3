import { defineNuxtPlugin } from '#app'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const app = Toast

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(app)
})